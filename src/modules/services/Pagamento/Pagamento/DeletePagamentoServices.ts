import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Pagamento from '../../../../shared/infra/typeorm/entities/Pagamento';
import PagamentoRepository from '../../../../shared/infra/typeorm/repositories/PagamentoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';

interface IRequestDTO{

  uuidpagamento: string;

}
 class DeletePagamentoService {

     public async execute( {uuidpagamento}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(PagamentoRepository);

      const redisCache = new RedisCache();

      const service = await usersRepository.findOne(uuidpagamento);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_PAGAMENTO');

      await usersRepository.remove(service);
      }
  }

export default DeletePagamentoService;