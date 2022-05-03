import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import ReservaRepository from '../../../typeorm/repositories/ReservaRepository'

interface IRequestDTO{

  cod_reserva_uuid: string;

}
 class DeleteReservaService {

     public async delete( {cod_reserva_uuid}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(ReservaRepository);

      const service = await Repository.findOne(cod_reserva_uuid);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await Repository.remove(service);
      }
  }

export default DeleteReservaService;