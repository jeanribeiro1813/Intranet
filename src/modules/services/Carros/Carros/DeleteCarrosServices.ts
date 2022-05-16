import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Carros from '../../../../shared/infra/typeorm/entities/Carros';
import CarrosRepository from '../../../../shared/infra/typeorm/repositories/CarrosRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'


interface IRequestDTO{

  id_uuid:string;

}

@injectable()
class DeleteCargoService {

  constructor(
    @inject('CarrosRepository')
    private carrosRepository: CarrosRepository){
    
  }

     public async delete( {id_uuid}: IRequestDTO) : Promise<void> {

      const redisCache = new RedisCache();

      const service = await this.carrosRepository.findById(id_uuid);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_CARROS');

      await this.carrosRepository.remove(service);
      }
  }

export default DeleteCargoService;