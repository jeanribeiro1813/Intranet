import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Paginas from '../../../typeorm/entities/Paginas';
import PaginaRepository from '../../../typeorm/repositories/PaginaRepository'



interface IRequestDTO {

  cod_page_uuid: string;
  pagina:string;
  descricao: string;
  banner: number;
  cod_page: number;


  }

  class UpdatePaginasService {

    public async update({cod_page_uuid,pagina,descricao,banner,cod_page}: IRequestDTO): Promise<Paginas | Error> {

      const Repository = getCustomRepository(PaginaRepository);

      const result = await Repository.findOne(cod_page_uuid);

      if (!result) {
        throw new AppError ('client não existe',404);
      }


      result.pagina = pagina ? pagina : result.pagina;
      result.descricao = descricao ? descricao : result.descricao;
      result.cod_page = cod_page ? cod_page : result.cod_page;
      result.banner = banner ? banner : result.banner;
  

      await Repository.save(result);

      return result;
    }
  }

  export default UpdatePaginasService;
