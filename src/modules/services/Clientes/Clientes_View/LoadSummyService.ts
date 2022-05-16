import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Clientes from '../../../../shared/infra/typeorm/entities/Clientes';
import ClientesRepository from '../../../../shared/infra/typeorm/repositories/ClientesRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'

@injectable()
class LoadClientesSummaryService {

  constructor(
    @inject('ClientesRepository')
    private clientesRepository: ClientesRepository){
    
  }

    public async summary (): Promise<Clientes[] | AppError> {
   
        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<Clientes[]>('API_REDIS_CLIENTES')


        if(!responseDTO){
  
            responseDTO  = await this.clientesRepository.findAll();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_CLIENTES',responseDTO)
        }

        return responseDTO;
    }
}

export default LoadClientesSummaryService;
