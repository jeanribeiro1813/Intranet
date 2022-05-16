import AppError from '../../../../shared/errors/AppErrors';
import AdvRepository from '../../../../shared/infra/typeorm/repositories/AdvRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'

interface IRequestDTO{

  codadv: string;

}

@injectable()
class DeleteClientesService {

  constructor(
    @inject('AdvRepository')
    private advRepository: AdvRepository){
    
  }

     public async delete( {codadv}: IRequestDTO) : Promise<void> {

      const redisCache = new RedisCache();

      const service = await this.advRepository.findById(codadv);

      if (!service) {
        throw new AppError('Não Existe ',402);

      }

      await redisCache.invalidation('API_REDIS_ADv');

      await this.advRepository.remove(service);
      }
  
}
export default DeleteClientesService;