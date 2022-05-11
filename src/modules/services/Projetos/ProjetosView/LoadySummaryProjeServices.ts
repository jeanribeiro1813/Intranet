import { getCustomRepository } from "typeorm";
import ProjetosViewRepository from '../../../../shared/infra/typeorm/repositories/ProjetosViewRepository';
import ProjetosView from '../../../../shared/infra/typeorm/entities/ProjetosView';
import RedisCache from '../../../../shared/cache/RedisCache';



class LoadProjetoSummaryService{
    public async executeDes (): Promise<ProjetosView[]> {

        const repository = getCustomRepository(ProjetosViewRepository);

        const redisCache = new RedisCache();
  
        let responseDTO = await redisCache.recover<ProjetosView[]>('API_REDIS_PROJETOS')
  
  
        if(!responseDTO){
  
            responseDTO  = await repository.find();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_PROJETOS',responseDTO)
        }
        
        
        return responseDTO;
      }
}

export default LoadProjetoSummaryService;
