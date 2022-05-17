import { getCustomRepository } from "typeorm";
import ReservaRepository from '../../../../shared/infra/typeorm/repositories/ReservaRepository'
import Reserva from "../../../../shared/infra/typeorm/entities/Reserva";
import RedisCache from '../../../../shared/cache/RedisCache';
import AppError from "../../../../shared/errors/AppErrors";
import {injectable, inject} from 'tsyringe'


@injectable()
class LoadClientesSummaryService {

    constructor(
        @inject('ReservaRepository')
        private reservaRepository: ReservaRepository){
        
      }

    public async executeDes (): Promise<Reserva[] | AppError> {

        const redisCache = new RedisCache();
  
        let responseDTO = await redisCache.recover<Reserva[]>('API_REDIS_RESERVA')
  
  
        if(!responseDTO){
  
            responseDTO  = await this.reservaRepository.findAll();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_RESERVA',responseDTO)
        }
        
    
        return responseDTO;
    }
}

export default LoadClientesSummaryService;
