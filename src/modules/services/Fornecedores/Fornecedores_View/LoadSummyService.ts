import AppError from "../../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Fornecedores from '../../../../shared/infra/typeorm/entities/Fornecedores';
import FornecedoresRepository from '../../../../shared/infra/typeorm/repositories/FornecedoresRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'





@injectable()
class LoadFornecedoresSummaryService {

    constructor(
        @inject('FornecedoresRepository')
        private fornecedoresRepository: FornecedoresRepository){
        
      }

    public async summary (): Promise<Fornecedores[] | AppError> {

        const redisCache = new RedisCache();
      
        let responseDTO = await redisCache.recover<Fornecedores[]>('API_REDIS_FORNECEDORES')
  
  
        if(!responseDTO){
  
            responseDTO  = await this.fornecedoresRepository.findAll();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_FORNECEDORES',responseDTO)
        }
        
        
        return responseDTO;
    }
}

export default LoadFornecedoresSummaryService;
