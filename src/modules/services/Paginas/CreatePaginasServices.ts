import { getCustomRepository } from 'typeorm'
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

  class CreatePaginasService {

    public async execute({ cod_page_uuid,pagina,descricao,banner,cod_page}: IRequestDTO): Promise<Paginas | Error> {

      const clientesRepository = getCustomRepository(PaginaRepository);

      const checkUserExists = await clientesRepository.findById(cod_page_uuid);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  clientesRepository.create({

        cod_page_uuid,pagina,descricao,banner,cod_page

      });

      await clientesRepository.save(cliet);

      return cliet;
    }
  }

  export default CreatePaginasService;
