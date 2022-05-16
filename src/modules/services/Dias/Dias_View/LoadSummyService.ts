import Dias from "../../../../shared/infra/typeorm/entities/Dias";
import DiasRepository from '../../../../shared/infra/typeorm/repositories/DiasRepository'
import AppError from "../../../../shared/errors/AppErrors";
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'


@injectable()
class LoadPagamentoSummaryService {

constructor(
  @inject('DiasRepository')
  private diasRepository: DiasRepository){
  
}

    public async executeDes (): Promise<Dias[] | AppError> {
        
        const redisCache = new RedisCache();

        let dias = await redisCache.recover<Dias[]>('API_REDIS_DIAS')

        if(!dias){
            
            dias =  await this.diasRepository.findAll();

            await redisCache.save('API_REDIS_DIAS',dias)

        }


        return dias;
    }
}

export default LoadPagamentoSummaryService;
