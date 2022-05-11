import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import DiasRepository from '../../../../shared/infra/typeorm/repositories/DiasRepository'
import RedisCache from '../../../../shared/cache/RedisCache';


interface IRequestDTO{

  uuiddiasuteis: string;

}
 class DeletePaginasService {

     public async delete( {uuiddiasuteis}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(DiasRepository);

      const redisCache = new RedisCache();

      const service = await Repository.findOne(uuiddiasuteis);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_DIAS');

      await Repository.remove(service);
      
      }
  }

export default DeletePaginasService;