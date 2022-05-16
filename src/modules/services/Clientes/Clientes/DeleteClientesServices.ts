import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Clientes from '../../../../shared/infra/typeorm/entities/Clientes';
import ClientesRepository from '../../../../shared/infra/typeorm/repositories/ClientesRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'


interface IRequestDTO{

  uuidcliente: string;

}


@injectable()
class DeleteClientesService {

  constructor(
    @inject('ClientesRepository')
    private clientesRepository: ClientesRepository){
    
  }
     public async delete( {uuidcliente}: IRequestDTO) : Promise<void> {

      const redisCache = new RedisCache();

      const service = await this.clientesRepository.findById(uuidcliente);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_CLIENTES');

      await this.clientesRepository.remove(service);
      }
  }

export default DeleteClientesService;