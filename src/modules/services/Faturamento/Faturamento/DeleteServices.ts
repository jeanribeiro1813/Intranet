import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository } from 'typeorm'
import FaturamentoRepository from '../../../typeorm/repositories/FaturamentoRepository'

interface IRequestDTO{

  uuidfat:string;

}
 class DeleteFaturamentoService {

     public async execute( {uuidfat}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(FaturamentoRepository);

      const service = await usersRepository.findOne(uuidfat);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await usersRepository.remove(service);
      }
  }

export default DeleteFaturamentoService;