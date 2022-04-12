import AppError from '@shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Pagamento from '../../../typeorm/entities/Pagamento';
import PagamentoRepository from '../../../typeorm/repositories/PagamentoRepository'

interface IRequestDTO{

  uuidpagamento: string;

}
 class DeletePagamentoService {

     public async execute( {uuidpagamento}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(PagamentoRepository);

      const service = await usersRepository.findOne(uuidpagamento);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await usersRepository.remove(service);
      }
  }

export default DeletePagamentoService;