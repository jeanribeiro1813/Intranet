import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Paginas from '../../../../shared/infra/typeorm/entities/Paginas';
import PaginaRepository from '../../../../shared/infra/typeorm/repositories/PaginaRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'




interface IRequestDTO {
  cod_page_uuid: string;
  pagina:string;
  descricao: string;
  banner: number;
  cod_page: number;



  }

  @injectable()
class CreatePaginasService {

    constructor(
        @inject('PaginaRepository')
        private paginaRepository: PaginaRepository){
        
      }


    public async create({ cod_page_uuid,pagina,descricao,banner,cod_page}: IRequestDTO): Promise<Paginas | Error> {

      const redisCache = new RedisCache();

      const result = await this.paginaRepository.findById(cod_page_uuid);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  this.paginaRepository.create({

        cod_page_uuid,pagina,descricao,banner,cod_page

      });

      await redisCache.invalidation('API_REDIS_PAGINAS');

      return cliet;
    }
  }

  export default CreatePaginasService;
