import AppError from '../../../../shared/errors/AppErrors';
import AtividadeRepository from '../../../../shared/infra/typeorm/repositories/AtividadeRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'


interface IRequestDTO{

  uuidatividade: string;

}

@injectable()
class DeleteClientesService {

  constructor(
    @inject('AtividadeRepository')
    private atividadeRepository: AtividadeRepository){
    
  }

     public async delete( {uuidatividade}: IRequestDTO) : Promise<void | AppError> {

      const redisCache = new RedisCache();

      const service = await this.atividadeRepository.findById(uuidatividade);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_ATIVIDADE');

      await this.atividadeRepository.remove(service);
      }
  }

export default DeleteClientesService;