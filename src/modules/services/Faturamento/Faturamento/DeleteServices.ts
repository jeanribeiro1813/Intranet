import AppError from '@shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import FaturamentoRepository from '../../../typeorm/repositories/FaturamentoRepository'
import Faturamento from '../../../typeorm/entities/Faturamento'

interface IRequestDTO{

  codfat:string;

}
 class DeleteFaturamentoService {

     public async execute( {codfat}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(FaturamentoRepository);

      const service = await usersRepository.findOne(codfat);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await usersRepository.remove(service);
      }
  }

export default DeleteFaturamentoService;