import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Atividades from '../../../../shared/infra/typeorm/entities/Atividades';
import AtividadeRepository from '../../../../shared/infra/typeorm/repositories/AtividadeRepository'
import RedisCache from '../../../../shared/cache/RedisCache';


interface IRequestDTO{

  codadv: string;

}
 class DeleteClientesService {

     public async delete( {codadv}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(AtividadeRepository);

      const redisCache = new RedisCache();

      const service = await Repository.findOne(codadv);

      if (!service) {
        throw new AppError('Não Existe ',402);

      }

      await redisCache.invalidation('API_REDIS_ADv');

      await Repository.remove(service);
      }
  }

export default DeleteClientesService;