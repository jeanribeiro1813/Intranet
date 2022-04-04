import AppError from '@shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Cargo from '../../typeorm/entities/Cargo';
import CargoRepository from '../../typeorm/repositories/CargoRepository'

interface IRequestDTO{

  cod_cargo_uuid:string;

}
 class DeleteCargoService {

     public async execute( {cod_cargo_uuid}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(CargoRepository);

      const service = await usersRepository.findOne(cod_cargo_uuid);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await usersRepository.remove(service);
      }
  }

export default DeleteCargoService;