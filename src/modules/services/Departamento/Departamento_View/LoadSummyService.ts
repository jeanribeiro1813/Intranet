import { getCustomRepository } from "typeorm";
import Departamento from '../../../../shared/infra/typeorm/entities/Departamento';
import DepartamentoRepository from '../../../../shared/infra/typeorm/repositories/DepartamentoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import AppError from "../../../../shared/errors/AppErrors";
import {injectable, inject} from 'tsyringe'



@injectable()
  class LoadClientesSummaryService {
  
    constructor(
      @inject('DepartamentoRepository')
      private departamentoRepository: DepartamentoRepository){
      
    }

    
    public async summary (): Promise<Departamento[]| AppError> {

        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<Departamento[]>('API_REDIS_DEPARTAMENTO')


        if(!responseDTO){

            responseDTO  = await this.departamentoRepository.findAll();
            
            //Criando um save Redis

            await redisCache.save('API_REDIS_DEPARTAMENTO',responseDTO)
        }
        
        
        return responseDTO;
    }
}

export default LoadClientesSummaryService;
