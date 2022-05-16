import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Contrato from '../../../../shared/infra/typeorm/entities/Contrato';
import ContratoRepository from '../../../../shared/infra/typeorm/repositories/ContratoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'


interface IRequestDTO{

  uuidcontrato: string;

}

@injectable()
  class DeleteClientesService {

    constructor(
      @inject('ContratoRepository')
      private contratoRepository: ContratoRepository){
      
    }

     public async delete( {uuidcontrato}: IRequestDTO) : Promise<void> {

      const redisCache = new RedisCache();

      const service = await this.contratoRepository.findById(uuidcontrato);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_CONTRATO');

      await this.contratoRepository.remove(service);
      }
  }

export default DeleteClientesService;