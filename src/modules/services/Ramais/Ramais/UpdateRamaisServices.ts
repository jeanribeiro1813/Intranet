import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Ramais from '../../../../shared/infra/typeorm/entities/Ramais';
import RamaisRepository from '../../../../shared/infra/typeorm/repositories/RamaisRepository'
import RedisCache from '../../../../shared/cache/RedisCache';



interface IRequestDTO {

  uuidramal: string;
  ramal:number;
  cod_atv:string;

  

  }

  class UpdateRamaiservice {

    public async update({ uuidramal,ramal,cod_atv}: IRequestDTO): Promise<Ramais | Error> {

      const Repository = getCustomRepository(RamaisRepository);

      const redisCache = new RedisCache();

      const result = await Repository.findOne(uuidramal);

      if (!result) {
        throw new AppError ('client não existe',404);
      }

      await redisCache.invalidation('API_REDIS_RAMAIS');

      result.ramal = ramal ? ramal : result.ramal;
      result.cod_atv = cod_atv ? cod_atv : result.cod_atv;

      await Repository.save(result);

      return result;
    }
  }

  export default UpdateRamaiservice;
