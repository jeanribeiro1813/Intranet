import Pagina from "../../../../shared/infra/typeorm/entities/Paginas";
import { getCustomRepository } from "typeorm";
import PaginaRepository from '../../../../shared/infra/typeorm/repositories/PaginaRepository'
import AppError from '../../../../shared/errors/AppErrors';
import RedisCache from '../../../../shared/cache/RedisCache';

class LoadPagamentoSummaryService{

    public async executeDes (): Promise<Pagina[]| AppError> {
        
        const repository = getCustomRepository(PaginaRepository);

        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<Pagina[]>('API_REDIS_PAGINAS')

        if(!responseDTO){

            responseDTO  = await repository.find();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_PAGINAS',responseDTO)
        }
        
        
        return responseDTO;
      

    }
}

export default LoadPagamentoSummaryService;
