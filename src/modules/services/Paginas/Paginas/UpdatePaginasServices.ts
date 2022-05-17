import { getCustomRepository,getRepository } from 'typeorm'
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
class UpdatePaginasService {

    constructor(
        @inject('PaginaRepository')
        private paginaRepository: PaginaRepository){
        
      }
    public async update({cod_page_uuid,pagina,descricao,banner,cod_page}: IRequestDTO): Promise<Paginas | Error> {

      const redisCache = new RedisCache();

      const result = await this.paginaRepository.findById(cod_page_uuid);

      if (!result) {
        throw new AppError ('client não existe',404);
      }

      await redisCache.invalidation('API_REDIS_PAGINAS');

      result.pagina = pagina ? pagina : result.pagina;
      result.descricao = descricao ? descricao : result.descricao;
      result.cod_page = cod_page ? cod_page : result.cod_page;
      result.banner = banner ? banner : result.banner;
  

      await this.paginaRepository.save(result);

      return result;
    }
  }

  export default UpdatePaginasService;
