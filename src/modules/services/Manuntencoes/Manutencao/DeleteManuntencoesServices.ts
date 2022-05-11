import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Atividades from '../../../../shared/infra/typeorm/entities/Atividades';
import AtividadeRepository from '../../../../shared/infra/typeorm/repositories/AtividadeRepository'
import RedisCache from '../../../../shared/cache/RedisCache';

interface IRequestDTO{

  cod_manutencao_uuid: string;


}
 class DeleteManutencaoService {

     public async delete( {cod_manutencao_uuid}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(AtividadeRepository);

      const redisCache = new RedisCache();

      const service = await usersRepository.findOne(cod_manutencao_uuid);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_MANUTENCAO');

      await usersRepository.remove(service);
      }
  }

export default DeleteManutencaoService;