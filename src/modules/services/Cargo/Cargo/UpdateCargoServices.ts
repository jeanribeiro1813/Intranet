import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Cargo from '../../../../shared/infra/typeorm/entities/Cargo';
import CargoRepository from '../../../../shared/infra/typeorm/repositories/CargoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';



interface IRequestDTO {
  uuidcargo: string;
  cargo:string;
  cod_cargo:number;
  }

  class UpdateCargoService {

    public async update({uuidcargo,cargo, cod_cargo}: IRequestDTO): Promise<Cargo | Error> {

      const Repository = getCustomRepository(CargoRepository);

      const redisCache = new RedisCache();

      const result = await Repository.findOne(uuidcargo);

      if (!result) {
        throw new AppError ('cargo não existe',404);
      }


      await redisCache.invalidation('API_REDIS_SUMMARY');

      result.cargo = cargo ? cargo : result.cargo;
      result.cod_cargo = cod_cargo ? cod_cargo: result.cod_cargo



      await Repository.save(result);

      return result;
    }
  }

  export default UpdateCargoService;
