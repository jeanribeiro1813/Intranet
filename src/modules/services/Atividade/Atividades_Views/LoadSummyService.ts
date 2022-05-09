import AppError from "../../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Atividades from '../../../../shared/infra/typeorm/entities/Atividades';
import AtividadeRepository from '../../../../shared/infra/typeorm/repositories/AtividadeRepository'
import RedisCache from '../../../../shared/cache/RedisCache';


class LoadClientesSummaryService{
    public async summary (): Promise<Atividades []| AppError> {
        const projetosrRepository = getCustomRepository(AtividadeRepository);
        
        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<Atividades[]>('API_REDIS_SUMMARY')


        if(!responseDTO){

            responseDTO  = await projetosrRepository.find({order:{
                cod_atv:'ASC'
            }});
            
            //Criando um save Redis

            await redisCache.save('API_REDIS_SUMMARY',responseDTO)
        }
        
        
        return responseDTO;
    }
}

export default LoadClientesSummaryService;
