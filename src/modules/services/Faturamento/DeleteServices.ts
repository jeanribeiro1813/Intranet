import AppError from '@shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Faturamento from '../../../modules/typeorm/entities/Faturamento';
import FatRepository from '../../../modules/typeorm/repositories/FaturamentoRepository'

interface IRequestDTO{

  cod_fat:string;

}
 class DeleteFaturamentoService {

     public async execute( {cod_fat}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(FatRepository);

      const service = await usersRepository.findOne(cod_fat);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await usersRepository.remove(service);
      }
  }

export default DeleteFaturamentoService;