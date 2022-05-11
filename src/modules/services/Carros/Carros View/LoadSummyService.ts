import { getCustomRepository } from "typeorm";
import Carros from '../../../../shared/infra/typeorm/entities/Carros';
import CarrosRepository from '../../../../shared/infra/typeorm/repositories/CarrosRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import AppError from '../../../../shared/errors/AppErrors';

class LoadCarrosSummaryService{
    public async summary (): Promise<Carros[] | AppError> {
        const projetosrRepository = getCustomRepository(CarrosRepository);

        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<Carros[]>('API_REDIS_CARROS')


        if(!responseDTO){
  
            responseDTO  = await projetosrRepository.find();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_CARROS',responseDTO)
        }
        
        
        return responseDTO;
    }
}

export default LoadCarrosSummaryService;
