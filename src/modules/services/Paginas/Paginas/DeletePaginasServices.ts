import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import PaginaRepository from '../../../../shared/infra/typeorm/repositories/PaginaRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'


interface IRequestDTO{

  cod_page_uuid: string;

}

@injectable()
class DeletePaginasService {

    constructor(
        @inject('PaginaRepository')
        private paginaRepository: PaginaRepository){
        
      }

     public async delete( {cod_page_uuid}: IRequestDTO) : Promise<void> {

      const redisCache = new RedisCache();

      const service = await this.paginaRepository.findById(cod_page_uuid);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_PAGINAS');

      await this.paginaRepository.remove(service);
      }
  }

export default DeletePaginasService;