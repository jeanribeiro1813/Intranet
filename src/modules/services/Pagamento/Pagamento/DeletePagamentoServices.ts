import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Pagamento from '../../../../shared/infra/typeorm/entities/Pagamento';
import PagamentoRepository from '../../../../shared/infra/typeorm/repositories/PagamentoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'

interface IRequestDTO{

  uuidpagamento: string;

}


@injectable()
class DeletePagamentoService {

    constructor(
        @inject('PagamentoRepository')
        private PagamentoRepository: PagamentoRepository){
        
      }

     public async execute( {uuidpagamento}: IRequestDTO) : Promise<void> {

      const redisCache = new RedisCache();

      const service = await this.PagamentoRepository.findById(uuidpagamento);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_PAGAMENTO');

      await this.PagamentoRepository.remove(service);
      }
  }

export default DeletePagamentoService;