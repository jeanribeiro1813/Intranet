import AppError from '../../../../shared/errors/AppErrors';
import RamaisRepository from '../../../../shared/infra/typeorm/repositories/RamaisRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'

interface IRequestDTO{

  uuidramal: string;

}

@injectable()
class DeleteRamaisService {

    constructor(
        @inject('RamaisRepository')
        private ramaisRepository: RamaisRepository){
        
      }

     public async delete( {uuidramal}: IRequestDTO) : Promise<void> {

      const redisCache = new RedisCache()

      const service = await this.ramaisRepository.findById(uuidramal);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      

      await redisCache.invalidation('API_REDIS_RAMAIS');

      await this.ramaisRepository.remove(service);
      }
  }

export default DeleteRamaisService;