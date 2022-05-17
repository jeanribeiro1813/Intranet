import { getCustomRepository } from "typeorm";
import Manutencoes from '../../../../shared/infra/typeorm/entities/Manutencoes';
import ManuntencoesRepository from '../../../../shared/infra/typeorm/repositories/ManuntencoesRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import AppError from "../../../../shared/errors/AppErrors";
import {injectable, inject} from 'tsyringe'

@injectable()
class LoadManuntencaoSummaryService {

    constructor(
        @inject('ManuntencoesRepository')
        private manutencaoresRepository: ManuntencoesRepository){
        
      }
    public async executeDes (): Promise<Manutencoes[] | AppError> {
      
        const redisCache = new RedisCache();
      
        let responseDTO = await redisCache.recover<Manutencoes[]>('API_REDIS_MANUTENCAO')
  
  
        if(!responseDTO){
  
            responseDTO  = await this.manutencaoresRepository.findAll();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_MANUTENCAO',responseDTO)
        }
        
        
        return responseDTO;
    }
}

export default LoadManuntencaoSummaryService;
