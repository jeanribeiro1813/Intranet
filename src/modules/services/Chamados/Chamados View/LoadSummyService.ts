import { getCustomRepository } from "typeorm";
import Chamados from '../../../../shared/infra/typeorm/entities/Chamados';
import ChamadosRepository from '../../../../shared/infra/typeorm/repositories/ChamadosRepository'
import AppError from '../../../../shared/errors/AppErrors';
import RedisCache from '../../../../shared/cache/RedisCache';






class LoadSummary{
    public async summary (): Promise<Chamados[] | AppError> {
        const projetosrRepository = getCustomRepository(ChamadosRepository);

        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<Chamados[]>('API_REDIS_SUMMARY')


        if(!responseDTO){
  
            responseDTO  = await projetosrRepository.find();
            
            //Criando um save Redis
  
            await redisCache.save('API_REDIS_SUMMARY',responseDTO)
        }
        
        
        return responseDTO;
    }
}

export default LoadSummary;
