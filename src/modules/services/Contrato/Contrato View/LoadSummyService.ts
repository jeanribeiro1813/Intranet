import { getCustomRepository } from "typeorm";
import ContratoRepository from '../../../../shared/infra/typeorm/repositories/ContratoRepository'
import Contrato from '../../../../shared/infra/typeorm/entities/Contrato';
import AppError from '../../../../shared/errors/AppErrors';
import RedisCache from '../../../../shared/cache/RedisCache';


class LoadClientesSummaryService{
    public async summary (): Promise<Contrato[] | AppError> {
      
        const projetosrRepository = getCustomRepository(ContratoRepository);

        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<Contrato[]>('API_REDIS_CONTRATO')


        if(!responseDTO){
  
            responseDTO  = await projetosrRepository.find();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_CONTRATO',responseDTO)
        }
        
        
        return responseDTO;
    }
}

export default LoadClientesSummaryService;
