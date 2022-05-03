import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Carros from '../../../typeorm/entities/Carros';
import CarrosRepository from '../../../typeorm/repositories/CarrosRepository'

interface IRequestDTO{

  id_uuid:string;

}
 class DeleteCargoService {

     public async delete( {id_uuid}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(CarrosRepository);

      const service = await Repository.findOne(id_uuid);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await Repository.remove(service);
      }
  }

export default DeleteCargoService;