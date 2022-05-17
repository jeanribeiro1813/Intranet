import PagamentoViewRepository from '../../../../shared/infra/typeorm/repositories/PagamentoViewRepository'
import PagamentoView from '../../../../shared/infra/typeorm/entities/PagamentoView';
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'

@injectable()
class LoadPagamentoSummaryService {

    constructor(
        @inject('PagamentoViewRepository')
        private PagamentoRepository: PagamentoViewRepository){
        
      }
      
    public async execute (): Promise<PagamentoView[]> {

        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<PagamentoView[]>('API_REDIS_PAGAMENTO')


        if(!responseDTO){

            responseDTO  = await this.PagamentoRepository.findAll();
            
            //Criando um save Redis

            await redisCache.save('API_REDIS_PAGAMENTO',responseDTO)
        }
        
        return responseDTO;
    }
}

export default LoadPagamentoSummaryService;
