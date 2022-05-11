import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Fornecedores from '../../../../shared/infra/typeorm/entities/Fornecedores';
import FornecedoresRepository from '../../../../shared/infra/typeorm/repositories/FornecedoresRepository'
import RedisCache from '../../../../shared/cache/RedisCache';


interface IRequestDTO{

  uuidusuario: string;

}
 class DeleteFornecedoresService {

     public async delete( {uuidusuario}: IRequestDTO) : Promise<void> {

      const fornecedoresRepository = getCustomRepository(FornecedoresRepository);

      const redisCache = new RedisCache();

      const service = await fornecedoresRepository.findOne(uuidusuario);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_FORNECEDORES');

      await fornecedoresRepository.remove(service);
      }
  }

export default DeleteFornecedoresService;