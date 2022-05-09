import Adv from "../../../../shared/infra/typeorm/entities/Adv";
import { getCustomRepository } from "typeorm";
import AdvRepository from '../../../../shared/infra/typeorm/repositories/AdvRepository'
import AppError from "../../../../shared/errors/AppErrors";
import RedisCache from '../../../../shared/cache/RedisCache';


class LoadClientesSummaryService{
    public async summary (): Promise<Adv[] | AppError> {
        const projetosrRepository = getCustomRepository(AdvRepository);

        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<Adv[]>('API_REDIS_SUMMARY')

        if(!responseDTO){

            responseDTO  = await projetosrRepository.find();
            
            //Criando um save Redis

            await redisCache.save('API_REDIS_SUMMARY',responseDTO)
        }

        return responseDTO;
    }
}

export default LoadClientesSummaryService;
