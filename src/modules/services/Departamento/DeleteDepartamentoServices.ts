import AppError from '@shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Departamento from '../../typeorm/entities/Departamento';
import DepartamentoRepository from '../../typeorm/repositories/DepartamentoRepository'

interface IRequestDTO{

  coddeparta: string;

}
 class DeleteClientesService {

     public async execute( {coddeparta}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(DepartamentoRepository);

      const service = await usersRepository.findOne(coddeparta);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await usersRepository.remove(service);
      }
  }

export default DeleteClientesService;