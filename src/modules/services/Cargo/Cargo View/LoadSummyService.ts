import { getCustomRepository } from "typeorm";
import Cargo from '../../../../shared/infra/typeorm/entities/Cargo';
import CargoRepository from '../../../../shared/infra/typeorm/repositories/CargoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import AppError from '../../../../shared/errors/AppErrors';
import {injectable, inject} from 'tsyringe'

@injectable()
class LoadCargoSummaryService {

  constructor(
    @inject('CargoRepository')
    private cargoeRepository: CargoRepository){
    
  }

   public async summary (): Promise< Cargo[] | AppError> {
        const projetosrRepository = getCustomRepository(CargoRepository);
        
        const redisCache = new RedisCache();
        
        let responseDTO = await redisCache.recover<Cargo[]>('API_REDIS_CARGO')


        if(!responseDTO){
  
            responseDTO  = await this.cargoeRepository.findAll();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_CARGO',responseDTO)
        }
        return responseDTO;
    }
}

export default LoadCargoSummaryService;
