import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository } from 'typeorm'
import FaturamentoRepository from '../../../typeorm/repositories/FaturamentoRepository'

interface IRequestDTO{

  uuidfat:string;

}
 class DeleteFaturamentoService {

     public async delete( {uuidfat}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(FaturamentoRepository);

      const service = await Repository.findOne(uuidfat);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await Repository.remove(service);
      }
  }

export default DeleteFaturamentoService;