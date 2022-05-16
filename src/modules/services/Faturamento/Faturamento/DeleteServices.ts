import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository } from 'typeorm'
import FaturamentoRepository from '../../../../shared/infra/typeorm/repositories/FaturamentoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'



interface IRequestDTO{

  uuidfat:string;

}


@injectable()
class DeleteFaturamentoService {

  constructor(
    @inject('FaturamentoRepository')
    private fatRepository: FaturamentoRepository){
    
  }


     public async delete( {uuidfat}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(FaturamentoRepository);

      const redisCache = new RedisCache();

      const service = await this.fatRepository.findById(uuidfat)
      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_FAT');

      await this.fatRepository.remove(service);
      }
  }

export default DeleteFaturamentoService;