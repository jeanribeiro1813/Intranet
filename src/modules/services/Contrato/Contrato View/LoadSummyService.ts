import ContratoRepository from '../../../../shared/infra/typeorm/repositories/ContratoRepository'
import Contrato from '../../../../shared/infra/typeorm/entities/Contrato';
import AppError from '../../../../shared/errors/AppErrors';
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'


@injectable()
class LoadClientesSummaryService {

  constructor(
    @inject('ContratoRepository')
    private contratoRepository: ContratoRepository){
    
    }
    
    public async summary (): Promise<Contrato[] | AppError> {
      
        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<Contrato[]>('API_REDIS_CONTRATO')


        if(!responseDTO){
  
            responseDTO  = await this.contratoRepository.findAll();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_CONTRATO',responseDTO)
        }
        
        
        return responseDTO;
    }
}

export default LoadClientesSummaryService;
