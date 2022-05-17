import FaturamentoViewsRepository from '../../../../shared/infra/typeorm/repositories/FaturamentoViewsRepository';
import RedisCache from '../../../../shared/cache/RedisCache';
import FaturamentoView from '../../../../shared/infra/typeorm/entities/FaturamentoView';
import {injectable, inject} from 'tsyringe'



@injectable()
class LoadFatSummaryService {

  constructor(
    @inject('FaturamentoViewsRepository')
    private fatRepository: FaturamentoViewsRepository){
    
  }

    public async summary (): Promise< FaturamentoView[] > {      

        const redisCache = new RedisCache();
        

        let fatview = await redisCache.recover<FaturamentoView[]>('API_REDIS_FAT')

        

        if(!fatview){

            fatview  = await this.fatRepository.findAll();
            
            //Criando um save Redis

            await redisCache.save('API_REDIS_FAT',fatview)
        }

        return fatview;
    }
}

export default LoadFatSummaryService;
