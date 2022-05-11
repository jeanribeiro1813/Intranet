import AppError from "../../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Fornecedores from '../../../../shared/infra/typeorm/entities/Fornecedores';
import FornecedoresRepository from '../../../../shared/infra/typeorm/repositories/FornecedoresRepository'
import RedisCache from '../../../../shared/cache/RedisCache';






class LoadFornecedoresSummaryService{
    public async summary (): Promise<Fornecedores[] | AppError> {
        const projetosrRepository = getCustomRepository(FornecedoresRepository);

        const redisCache = new RedisCache();
      
        let responseDTO = await redisCache.recover<Fornecedores[]>('API_REDIS_FORNECEDORES')
  
  
        if(!responseDTO){
  
            responseDTO  = await projetosrRepository.find();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_FORNECEDORES',responseDTO)
        }
        
        
        return responseDTO;
    }
}

export default LoadFornecedoresSummaryService;
