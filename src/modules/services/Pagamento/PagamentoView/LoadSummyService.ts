import { getCustomRepository } from "typeorm";
import PagamentoViewRepository from '../../../../shared/infra/typeorm/repositories/PagamentoViewRepository'
import PagamentoView from '../../../../shared/infra/typeorm/entities/PagamentoView';
import RedisCache from '../../../../shared/cache/RedisCache';


class LoadPagamentoSummaryService{
    public async execute (): Promise<PagamentoView[]> {

        const projetosrRepository = getCustomRepository(PagamentoViewRepository);

        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<PagamentoView[]>('API_REDIS_SUMMARY')


        if(!responseDTO){

            responseDTO  = await projetosrRepository.find();
            
            //Criando um save Redis

            await redisCache.save('API_REDIS_SUMMARY',responseDTO)
        }
        
        return responseDTO;
    }
}

export default LoadPagamentoSummaryService;
