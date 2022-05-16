import AppError from '../../../../shared/errors/AppErrors';
import DiasRepository from '../../../../shared/infra/typeorm/repositories/DiasRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'


interface IRequestDTO{

  uuiddiasuteis: string;

}

@injectable()
class DeletePaginasService {

  constructor(
    @inject('DiasRepository')
    private diasRepository: DiasRepository){
    
  }

     public async delete( {uuiddiasuteis}: IRequestDTO) : Promise<void> {

      const redisCache = new RedisCache();

      const service = await this.diasRepository.findById(uuiddiasuteis);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_DIAS');

      await this.diasRepository.remove(service);
      
      }
  }

export default DeletePaginasService;