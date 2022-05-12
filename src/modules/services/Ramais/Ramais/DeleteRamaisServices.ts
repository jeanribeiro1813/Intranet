import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import RamaisRepository from '../../../../shared/infra/typeorm/repositories/RamaisRepository'
import RedisCache from '../../../../shared/cache/RedisCache';


interface IRequestDTO{

  uuidramal: string;

}
 class DeleteRamaisService {

     public async delete( {uuidramal}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(RamaisRepository);

      const redisCache = new RedisCache()

      const service = await Repository.findOne(uuidramal);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      

      await redisCache.invalidation('API_REDIS_RAMAIS');

      await Repository.remove(service);
      }
  }

export default DeleteRamaisService;