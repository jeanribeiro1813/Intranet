import AppError from "../../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Ramais from '../../../../shared/infra/typeorm/entities/Ramais';
import RamaisRepository from '../../../../shared/infra/typeorm/repositories/RamaisRepository'
import RedisCache from '../../../../shared/cache/RedisCache';


class LoadRamaisSummary{
    public async executeDes (): Promise<Ramais[] | AppError> {
        const projetosrRepository = getCustomRepository(RamaisRepository);

        const redisCache = new RedisCache();
  
        let responseDTO = await redisCache.recover<Ramais[]>('API_REDIS_RAMAIS')
  
  
        if(!responseDTO){
  
            responseDTO  = await projetosrRepository.find();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_RAMAIS',responseDTO)
        }
        
    
        return responseDTO;
    }
}

export default LoadRamaisSummary;
