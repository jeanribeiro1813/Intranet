import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Cargo from '../../../../shared/infra/typeorm/entities/Cargo';
import CargoRepository from '../../../../shared/infra/typeorm/repositories/CargoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'

interface IRequestDTO{

  uuidcargo:string;

}


@injectable()
class DeleteCargoService {

  constructor(
    @inject('CargoRepository')
    private cargoeRepository: CargoRepository){
    
  }

     public async delete( {uuidcargo}: IRequestDTO) : Promise<void> {

      const redisCache = new RedisCache();

      const service = await this.cargoeRepository.findById(uuidcargo);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_CARGO');

      await this.cargoeRepository.remove(service);
      }
  }

export default DeleteCargoService;