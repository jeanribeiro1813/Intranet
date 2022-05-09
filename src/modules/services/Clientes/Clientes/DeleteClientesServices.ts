import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Clientes from '../../../../shared/infra/typeorm/entities/Clientes';
import ClientesRepository from '../../../../shared/infra/typeorm/repositories/ClientesRepository'

interface IRequestDTO{

  uuidcliente: string;

}
 class DeleteClientesService {

     public async delete( {uuidcliente}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(ClientesRepository);

      const service = await Repository.findOne(uuidcliente);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await Repository.remove(service);
      }
  }

export default DeleteClientesService;