import Dias from "../../../../shared/infra/typeorm/entities/Dias";
import { getCustomRepository } from "typeorm";
import DiasRepository from '../../../../shared/infra/typeorm/repositories/DiasRepository'
import AppError from "../../../../shared/errors/AppErrors";
import RedisCache from '../../../../shared/cache/RedisCache';



class LoadPagamentoSummaryService{
    public async executeDes (): Promise<Dias[] | AppError> {
        
        const Repository = getCustomRepository(DiasRepository);

        const redisCache = new RedisCache();

        let dias = await redisCache.recover<Dias[]>('API_REDIS_DIAS')

        if(!dias){
            
            dias =  await Repository.find({});

            await redisCache.save('API_REDIS_DIAS',dias)

        }


        return dias;
    }
}

export default LoadPagamentoSummaryService;
