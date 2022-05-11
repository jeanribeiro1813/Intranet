import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Chamados from '../../../../shared/infra/typeorm/entities/Chamados';
import ChamadosRepository from '../../../../shared/infra/typeorm/repositories/ChamadosRepository'
import RedisCache from '../../../../shared/cache/RedisCache';

interface IRequestDTO{

  cod_chamado_uuid:string;

}
 class DeleteChamadosService {

     public async delete( {cod_chamado_uuid}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(ChamadosRepository);

      const redisCache = new RedisCache();

      const service = await Repository.findOne(cod_chamado_uuid);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_CHAMADOS');

      await Repository.remove(service);
      
      }
  }

export default DeleteChamadosService;