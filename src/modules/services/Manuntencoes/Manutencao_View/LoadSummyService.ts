import { getCustomRepository } from "typeorm";
import Manutencoes from '../../../../shared/infra/typeorm/entities/Manutencoes';
import ManuntencoesRepository from '../../../../shared/infra/typeorm/repositories/ManuntencoesRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import AppError from "../../../../shared/errors/AppErrors";


class LoadManuntencaoSummaryService{
    public async executeDes (): Promise<Manutencoes[] | AppError> {
        const projetosrRepository = getCustomRepository(ManuntencoesRepository);

       
        const redisCache = new RedisCache();
      
        let responseDTO = await redisCache.recover<Manutencoes[]>('API_REDIS_MANUTENCAO')
  
  
        if(!responseDTO){
  
            responseDTO  = await projetosrRepository.find();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_MANUTENCAO',responseDTO)
        }
        
        
        return responseDTO;
    }
}

export default LoadManuntencaoSummaryService;
