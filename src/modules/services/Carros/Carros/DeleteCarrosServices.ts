import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Carros from '../../../../shared/infra/typeorm/entities/Carros';
import CarrosRepository from '../../../../shared/infra/typeorm/repositories/CarrosRepository'
import RedisCache from '../../../../shared/cache/RedisCache';

interface IRequestDTO{

  id_uuid:string;

}
 class DeleteCargoService {

     public async delete( {id_uuid}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(CarrosRepository);

      const redisCache = new RedisCache();

      const service = await Repository.findOne(id_uuid);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_SUMMARY');

      await Repository.remove(service);
      }
  }

export default DeleteCargoService;