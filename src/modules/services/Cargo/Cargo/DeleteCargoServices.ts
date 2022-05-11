import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Cargo from '../../../../shared/infra/typeorm/entities/Cargo';
import CargoRepository from '../../../../shared/infra/typeorm/repositories/CargoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';

interface IRequestDTO{

  uuidcargo:string;

}
 class DeleteCargoService {

     public async delete( {uuidcargo}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(CargoRepository);

      const redisCache = new RedisCache();

      const service = await Repository.findOne(uuidcargo);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_CARGO');

      await Repository.remove(service);
      }
  }

export default DeleteCargoService;