import Pagina from "../../../../shared/infra/typeorm/entities/Paginas";
import { getCustomRepository } from "typeorm";
import PaginaRepository from '../../../../shared/infra/typeorm/repositories/PaginaRepository'
import AppError from '../../../../shared/errors/AppErrors';
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'

@injectable()
class LoadPagamentoSummaryService {

    constructor(
        @inject('PaginaRepository')
        private paginaRepository: PaginaRepository){
        
      }

      public async executeDes (): Promise<Pagina[]| AppError> {
        
        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<Pagina[]>('API_REDIS_PAGINAS')

        if(!responseDTO){

            responseDTO  = await this.paginaRepository.findAll();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_PAGINAS',responseDTO)
        }
        
        
        return responseDTO;
      

    }
}

export default LoadPagamentoSummaryService;
