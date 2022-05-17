import AppError from '../../../../shared/errors/AppErrors';
import FornecedoresRepository from '../../../../shared/infra/typeorm/repositories/FornecedoresRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'


interface IRequestDTO{

  uuidusuario: string;

}

@injectable()
class DeleteFornecedoresService {

    constructor(
        @inject('FornecedoresRepository')
        private fornecedoresRepository: FornecedoresRepository){
        
      }
      

     public async delete( {uuidusuario}: IRequestDTO) : Promise<void> {


      const redisCache = new RedisCache();

      const service = await this.fornecedoresRepository.findById(uuidusuario);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_FORNECEDORES');

      await this.fornecedoresRepository.remove(service);
      }
  }

export default DeleteFornecedoresService;