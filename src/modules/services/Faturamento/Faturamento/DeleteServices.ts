import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository } from 'typeorm'
import FaturamentoRepository from '../../../../shared/infra/typeorm/repositories/FaturamentoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';


interface IRequestDTO{

  uuidfat:string;

}
 class DeleteFaturamentoService {

     public async delete( {uuidfat}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(FaturamentoRepository);

      const redisCache = new RedisCache();

      const service = await Repository.findOne(uuidfat);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_FAT');

      await Repository.remove(service);
      }
  }

export default DeleteFaturamentoService;