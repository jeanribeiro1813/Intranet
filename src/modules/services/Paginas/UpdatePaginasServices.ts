import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Paginas from '../../typeorm/entities/Paginas';
import PaginaRepository from '../../typeorm/repositories/PaginaRepository'



interface IRequestDTO {

  cod_page_uuid: string;
  pagina:string;
  descricao: string;
  banner: number;
  cod_page: number;


  }

  class UpdatePaginasService {

    public async update({cod_page_uuid,pagina,descricao,banner,cod_page}: IRequestDTO): Promise<Paginas | Error> {

      const usersRepository = getCustomRepository(PaginaRepository);

      const client = await usersRepository.findOne(cod_page_uuid);

      if (!client) {
        throw new AppError ('client não existe',404);
      }


      client.pagina = pagina ? pagina : client.pagina;
      client.descricao = descricao ? descricao : client.descricao;
      client.cod_page = cod_page ? cod_page : client.cod_page;
      client.banner = banner ? banner : client.banner;
  

      await usersRepository.save(client);

      return client;
    }
  }

  export default UpdatePaginasService;
