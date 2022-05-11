import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Departamento from '../../../../shared/infra/typeorm/entities/Departamento';
import DepartamentoRepository from '../../../../shared/infra/typeorm/repositories/DepartamentoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';



interface IRequestDTO {

  uuiddeparta: string;
  departamento:string;

  }

  class UpdateClientService {

    public async update({uuiddeparta,departamento}: IRequestDTO): Promise<Departamento | Error> {

      const Repository = getCustomRepository(DepartamentoRepository);
      
      const redisCache = new RedisCache();

      const result = await Repository.findOne(uuiddeparta);

      if (!result) {
        throw new AppError ('client não existe',404);
      }

      await redisCache.invalidation('API_REDIS_DEPARTAMENTO');

      result.departamento = departamento ? departamento : result.departamento;

      await Repository.save(result);

      return result;
    }
  }

  export default UpdateClientService;
