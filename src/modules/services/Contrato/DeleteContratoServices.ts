import AppError from '../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Contrato from '../../typeorm/entities/Contrato';
import ContratoRepository from '../../typeorm/repositories/ContratoRepository'

interface IRequestDTO{

  uuidcontrato: string;

}
 class DeleteClientesService {

     public async execute( {uuidcontrato}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(ContratoRepository);

      const service = await usersRepository.findOne(uuidcontrato);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await usersRepository.remove(service);
      }
  }

export default DeleteClientesService;