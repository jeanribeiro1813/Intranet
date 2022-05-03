import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Departamento from '../../../typeorm/entities/Departamento';
import DepartamentoRepository from '../../../typeorm/repositories/DepartamentoRepository'

interface IRequestDTO{

  uuiddeparta: string;

}
 class DeleteClientesService {

     public async execute( {uuiddeparta}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(DepartamentoRepository);

      const result = await Repository.findOne(uuiddeparta);

      if (!result) {
        throw new AppError('Não Existe ',402);
      }
      await Repository.remove(result);
      }
  }

export default DeleteClientesService;