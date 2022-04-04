import AppError from '@shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Clientes from '../../typeorm/entities/Clientes';
import ClientesRepository from '../../typeorm/repositories/ClientesRepository'

interface IRequestDTO{

  id: string;

}
 class DeleteClientesService {

     public async execute( {id}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(ClientesRepository);

      const service = await usersRepository.findOne(id);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await usersRepository.remove(service);
      }
  }

export default DeleteClientesService;