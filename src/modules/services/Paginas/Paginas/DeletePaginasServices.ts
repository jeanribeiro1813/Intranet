import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Paginas from '../../../../shared/infra/typeorm/entities/Paginas';
import PaginaRepository from '../../../../shared/infra/typeorm/repositories/PaginaRepository'
import RedisCache from '../../../../shared/cache/RedisCache';


interface IRequestDTO{

  cod_page_uuid: string;

}
 class DeletePaginasService {

     public async delete( {cod_page_uuid}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(PaginaRepository);

      const redisCache = new RedisCache();

      const service = await Repository.findOne(cod_page_uuid);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_PAGINAS');

      await Repository.remove(service);
      }
  }

export default DeletePaginasService;