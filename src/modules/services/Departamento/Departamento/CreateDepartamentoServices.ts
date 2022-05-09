import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Departamento from '../../../../shared/infra/typeorm/entities/Departamento';
import DepartamentoRepository from '../../../../shared/infra/typeorm/repositories/DepartamentoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';




interface IRequestDTO {
  uuiddeparta: string;
  departamento:string;


  }

  class CreateClientesService {

    public async execute({ uuiddeparta,departamento}: IRequestDTO): Promise<Departamento | Error> {

      const Repository = getCustomRepository(DepartamentoRepository);

      const redisCache = new RedisCache();

      const result = await Repository.findById(uuiddeparta);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  Repository.create({

        uuiddeparta,departamento

      });

      await redisCache.invalidation('API_REDIS_SUMMARY');

      await Repository.save(cliet);

      return cliet;
    }
  }

  export default CreateClientesService;
