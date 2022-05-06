import { getCustomRepository } from "typeorm";
import FaturamentoViewsRepository from '../../../../modules/typeorm/repositories/FaturamentoViewsRepository';
import RedisCache from '../../../../shared/cache/RedisCache';
import FaturamentoView from '../../../typeorm/entities/FaturamentoView';






class LoadFatSummaryService{
    public async summary (): Promise< FaturamentoView[] > {

        const projetosrRepository = getCustomRepository(FaturamentoViewsRepository);
        

        const redisCache = new RedisCache();
        

        let fatview = await redisCache.recover<FaturamentoView[]>('API_REDIS_SUMMARY')

        

        if(!fatview){

            fatview  = await projetosrRepository.find();
            
            //Criando um save Redis

            await redisCache.save('API_REDIS_SUMMARY',fatview)
        }

        return fatview;
    }
}

export default LoadFatSummaryService;
