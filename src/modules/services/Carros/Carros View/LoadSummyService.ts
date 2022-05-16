import { getCustomRepository } from "typeorm";
import Carros from '../../../../shared/infra/typeorm/entities/Carros';
import CarrosRepository from '../../../../shared/infra/typeorm/repositories/CarrosRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import AppError from '../../../../shared/errors/AppErrors';
import {injectable, inject} from 'tsyringe'



@injectable()
class LoadCarrosSummaryService {

  constructor(
    @inject('CarrosRepository')
    private carrosRepository: CarrosRepository){
    
  }

    public async summary (): Promise<Carros[] | AppError> {

        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<Carros[]>('API_REDIS_CARROS')


        if(!responseDTO){
  
            responseDTO  = await this.carrosRepository.findAll();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_CARROS',responseDTO)
        }
        
        
        return responseDTO;
    }
}

export default LoadCarrosSummaryService;
