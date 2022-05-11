import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Paginas from '../../../../shared/infra/typeorm/entities/Paginas';
import PaginaRepository from '../../../../shared/infra/typeorm/repositories/PaginaRepository'
import RedisCache from '../../../../shared/cache/RedisCache';




interface IRequestDTO {
  cod_page_uuid: string;
  pagina:string;
  descricao: string;
  banner: number;
  cod_page: number;



  }

  class CreatePaginasService {

    public async create({ cod_page_uuid,pagina,descricao,banner,cod_page}: IRequestDTO): Promise<Paginas | Error> {

      const Repository = getCustomRepository(PaginaRepository);

      const redisCache = new RedisCache();

      const result = await Repository.findById(cod_page_uuid);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  Repository.create({

        cod_page_uuid,pagina,descricao,banner,cod_page

      });

      await redisCache.invalidation('API_REDIS_PAGINAS');

      await Repository.save(cliet);

      return cliet;
    }
  }

  export default CreatePaginasService;
