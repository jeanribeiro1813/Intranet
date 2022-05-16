import AppError from "../../../../shared/errors/AppErrors";
import Atividades from '../../../../shared/infra/typeorm/entities/Atividades';
import AtividadeRepository from '../../../../shared/infra/typeorm/repositories/AtividadeRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'


@injectable()
class LoadClientesSummaryService {

  constructor(
    @inject('AtividadeRepository')
    private atividadeRepository: AtividadeRepository){
    
  }

    public async summary (): Promise<Atividades []| AppError> {

        
        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<Atividades[]>('API_REDIS_ATIVIDADE')


        if(!responseDTO){

            responseDTO  = await this.atividadeRepository.findAll();
            
            //Criando um save Redis

            await redisCache.save('API_REDIS_ATIVIDADE',responseDTO)
        }
        
        
        return responseDTO;
    }
}

export default LoadClientesSummaryService;
