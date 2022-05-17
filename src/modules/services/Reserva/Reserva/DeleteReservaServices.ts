import AppError from '../../../../shared/errors/AppErrors';
import ReservaRepository from '../../../../shared/infra/typeorm/repositories/ReservaRepository';
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'

interface IRequestDTO{

  cod_reserva_uuid: string;

}


@injectable()
class DeleteReservaService {

    constructor(
        @inject('ReservaRepository')
        private reservaRepository: ReservaRepository){
        
      }


     public async delete( {cod_reserva_uuid}: IRequestDTO) : Promise<void> {

      const redisCache = new RedisCache()

      const service = await this.reservaRepository.findById(cod_reserva_uuid);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_RESERVA');

      await this.reservaRepository.remove(service);
      }
  }

export default DeleteReservaService;