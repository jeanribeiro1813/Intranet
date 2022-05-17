import AppError from "../../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Ramais from '../../../../shared/infra/typeorm/entities/Ramais';
import RamaisRepository from '../../../../shared/infra/typeorm/repositories/RamaisRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'


@injectable()
class LoadRamaisSummary {

    constructor(
        @inject('RamaisRepository')
        private ramaisRepository: RamaisRepository){
        
      }

    public async executeDes (): Promise<Ramais[] | AppError> {

        const redisCache = new RedisCache();
  
        let responseDTO = await redisCache.recover<Ramais[]>('API_REDIS_RAMAIS')
  
  
        if(!responseDTO){
  
            responseDTO  = await this.ramaisRepository.findAll();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_RAMAIS',responseDTO)
        }
        
    
        return responseDTO;
    }
}

export default LoadRamaisSummary;
