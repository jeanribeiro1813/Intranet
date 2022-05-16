import AppError from '../../../../shared/errors/AppErrors';
import Departamento from '../../../../shared/infra/typeorm/entities/Departamento';
import DepartamentoRepository from '../../../../shared/infra/typeorm/repositories/DepartamentoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'




interface IRequestDTO {
  uuiddeparta: string;
  departamento:string;


  }


  @injectable()
class CreateClientesService {

  constructor(
    @inject('DepartamentoRepository')
    private departamentoRepository: DepartamentoRepository){
    
  }

    public async execute({ uuiddeparta,departamento}: IRequestDTO): Promise<Departamento | Error> {

      const redisCache = new RedisCache();

      const result = await this.departamentoRepository.findById(uuiddeparta);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  this.departamentoRepository.create({

        uuiddeparta,departamento

      });

      await redisCache.invalidation('API_REDIS_DEPARTAMENTO');

      return cliet;
    }
  }

  export default CreateClientesService;
