import { getCustomRepository } from "typeorm";
import Chamados from '../../../../shared/infra/typeorm/entities/Chamados';
import ChamadosRepository from '../../../../shared/infra/typeorm/repositories/ChamadosRepository'
import AppError from '../../../../shared/errors/AppErrors';
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'





@injectable()
class LoadSummary {

  constructor(
    @inject('ChamadosRepository')
    private chamadosRepository: ChamadosRepository){
    
  }

    public async summary (): Promise<Chamados[] | AppError> {

        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<Chamados[]>('API_REDIS_CHAMADOS')


        if(!responseDTO){
  
            responseDTO  = await this.chamadosRepository.findAll();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_CHAMADOS',responseDTO)
        }
        
        
        return responseDTO;
    }
}

export default LoadSummary;
