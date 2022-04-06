import AppError from '@shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Departamento from '../../typeorm/entities/Departamento';
import DepartamentoRepository from '../../typeorm/repositories/DepartamentoRepository'

interface IRequestDTO{

  uuiddeparta: string;

}
 class DeleteClientesService {

     public async execute( {uuiddeparta}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(DepartamentoRepository);

      const service = await usersRepository.findOne(uuiddeparta);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await usersRepository.remove(service);
      }
  }

export default DeleteClientesService;