import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Atividades from '../../../../shared/infra/typeorm/entities/Atividades';
import AtividadeRepository from '../../../../shared/infra/typeorm/repositories/AtividadeRepository'
import RedisCache from '../../../../shared/cache/RedisCache';



interface IRequestDTO {

  uuidatividade: string;
  atividade:string;
  cod_atv:string;

  }

  class UpdateClientService {

    public async update({uuidatividade,atividade,cod_atv}: IRequestDTO): Promise<Atividades | Error> {

      const Repository = getCustomRepository(AtividadeRepository);

      const redisCache = new RedisCache();

      const result = await Repository.findOne(uuidatividade);

      if (!result) {
        throw new AppError ('client não existe',404);
      }

      await redisCache.invalidation('API_REDIS_ATIVIDADE');

      result.atividade = atividade ? atividade : result.atividade;
      result.cod_atv = cod_atv ? cod_atv : result.cod_atv;

      await Repository.save(result);

      return result;
    }
  }

  export default UpdateClientService;
