import AppError from '@shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Cargo from '../../typeorm/entities/Cargo';
import CargoRepository from '../../typeorm/repositories/CargoRepository'

interface IRequestDTO{

  uuidcargo:string;

}
 class DeleteCargoService {

     public async execute( {uuidcargo}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(CargoRepository);

      const service = await usersRepository.findOne(uuidcargo);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await usersRepository.remove(service);
      }
  }

export default DeleteCargoService;