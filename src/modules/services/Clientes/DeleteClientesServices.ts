import AppError from '@shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Clientes from '../../typeorm/entities/Clientes';
import ClientesRepository from '../../typeorm/repositories/ClientesRepository'

interface IRequestDTO{

  uuidcliente: string;

}
 class DeleteClientesService {

     public async execute( {uuidcliente}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(ClientesRepository);

      const service = await usersRepository.findOne(uuidcliente);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await usersRepository.remove(service);
      }
  }

export default DeleteClientesService;