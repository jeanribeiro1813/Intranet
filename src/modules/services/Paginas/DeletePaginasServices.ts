import AppError from '@shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Paginas from '../../typeorm/entities/Paginas';
import PaginaRepository from '../../typeorm/repositories/PaginaRepository'

interface IRequestDTO{

  cod_page_uuid: string;

}
 class DeletePaginasService {

     public async execute( {cod_page_uuid}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(PaginaRepository);

      const service = await usersRepository.findOne(cod_page_uuid);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await usersRepository.remove(service);
      }
  }

export default DeletePaginasService;