import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import StatusPagamento from '../../../../shared/infra/typeorm/entities/StatusPagamento';
import StatusPagamentoRepository from '../../../../shared/infra/typeorm/repositories/StatusPagamentoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';




interface IRequestDTO {
  sttpguuid: string;
  status:string ;
  visivel:string;



  }

  class CreateFatService {

    public async execute({sttpguuid,
      status,
      visivel}: IRequestDTO): Promise<StatusPagamento | Error> {

      const projRepository = getCustomRepository(StatusPagamentoRepository);

      const checkUserExists = await projRepository.findById(sttpguuid);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const project =  projRepository.create({
        
        sttpguuid,
        status,
        visivel

      });


      await projRepository.save(project);

      return project;
    }
  }

  export default CreateFatService;
