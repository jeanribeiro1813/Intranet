import Adv from "../../../../shared/infra/typeorm/entities/Adv";
import { getCustomRepository } from "typeorm";
import AdvRepository from '../../../../shared/infra/typeorm/repositories/AdvRepository'
import AppError from "../../../../shared/errors/AppErrors";
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'

@injectable()
class LoadClientesSummaryService {

  constructor(
    @inject('AdvRepository')
    private advRepository: AdvRepository){
    
  }

    public async summary (): Promise<Adv[] | AppError> {
        
        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<Adv[]>('API_REDIS_ADv')

        if(!responseDTO){

            responseDTO  = await await this.advRepository.findAll();
            
            //Criando um save Redis

            await redisCache.save('API_REDIS_ADv',responseDTO)
        }

        return responseDTO;
    }
}

export default LoadClientesSummaryService;
