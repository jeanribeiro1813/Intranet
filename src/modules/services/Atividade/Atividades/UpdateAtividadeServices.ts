import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Atividades from '../../../../shared/infra/typeorm/entities/Atividades'
import AtividadeRepository from '../../../../shared/infra/typeorm/repositories/AtividadeRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'



interface IRequestDTO {

  uuidatividade: string;
  atividade:string;
  cod_atv:string;

  }


@injectable()
class UpdateClientService {

  constructor(
    @inject('AtividadeRepository')
    private atividadeRepository: AtividadeRepository){
    
  }

    public async update({uuidatividade,atividade,cod_atv}: IRequestDTO): Promise<Atividades | AppError> {


      const redisCache = new RedisCache();

      const result = await this.atividadeRepository.findById(uuidatividade);

      if (!result) {
        throw new AppError ('client não existe',404);
      }

      await redisCache.invalidation('API_REDIS_ATIVIDADE');

      result.atividade = atividade ? atividade : result.atividade;
      result.cod_atv = cod_atv ? cod_atv : result.cod_atv;

      await this.atividadeRepository.save(result);

      return result;
    }
  }

  export default UpdateClientService;
