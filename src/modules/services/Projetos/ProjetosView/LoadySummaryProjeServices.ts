import { getCustomRepository } from "typeorm";
import ProjetosViewRepository from '../../../../shared/infra/typeorm/repositories/ProjetosViewRepository';
import ProjetosView from '../../../../shared/infra/typeorm/entities/ProjetosView';
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'

@injectable()
class LoadProjetoSummaryService {

    constructor(
        @inject('ProjetosViewRepository')
        private projetosRepository: ProjetosViewRepository){
        
      }

    public async executeDes (): Promise<ProjetosView[]> {

        const redisCache = new RedisCache();
  
        let responseDTO = await redisCache.recover<ProjetosView[]>('API_REDIS_PROJETOS')
  
  
        if(!responseDTO){
  
            responseDTO  = await this.projetosRepository.findAll();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_PROJETOS',responseDTO)
        }
        
        
        return responseDTO;
      }
}

export default LoadProjetoSummaryService;
