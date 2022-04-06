import AppError from '@shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Funcionarios from '../../typeorm/entities/Funcionarios';
import FuncionarioRepository from '../../typeorm/repositories/FuncionarioRepository'

interface IRequestDTO{

  cod_func_uuid: string;

}
 class DeleteClientesService {

     public async execute( {cod_func_uuid}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(FuncionarioRepository);

      const service = await usersRepository.findOne(cod_func_uuid);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await usersRepository.remove(service);
      }
  }

export default DeleteClientesService;