import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Clientes from '../../../../shared/infra/typeorm/entities/Clientes';
import ClientesRepository from '../../../../shared/infra/typeorm/repositories/ClientesRepository'
import RedisCache from '../../../../shared/cache/RedisCache';


class LoadClientesSummaryService{
    public async summary (): Promise<Clientes[] | AppError> {

        const projetosrRepository = getCustomRepository(ClientesRepository);
    
        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<Clientes[]>('API_REDIS_SUMMARY')


        if(!responseDTO){
  
            responseDTO  = await projetosrRepository.find();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_SUMMARY',responseDTO)
        }

        return responseDTO;
    }
}

export default LoadClientesSummaryService;
