import { getCustomRepository } from "typeorm";
import ReservaRepository from '../../../../shared/infra/typeorm/repositories/ReservaRepository'
import Reserva from "../../../../shared/infra/typeorm/entities/Reserva";
import RedisCache from '../../../../shared/cache/RedisCache';
import AppError from "../../../../shared/errors/AppErrors";


class LoadClientesSummaryService{
    public async executeDes (): Promise<Reserva[] | AppError> {

        const projetosrRepository = getCustomRepository(ReservaRepository);

        const user = await projetosrRepository.find({});

        const redisCache = new RedisCache();
  
        let responseDTO = await redisCache.recover<Reserva[]>('API_REDIS_RESERVA')
  
  
        if(!responseDTO){
  
            responseDTO  = await projetosrRepository.find();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_RESERVA',responseDTO)
        }
        
    
        return responseDTO;
    }
}

export default LoadClientesSummaryService;
