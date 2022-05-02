import AppError from '../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Ramais from '../../typeorm/entities/Ramais';
import RamaisRepository from '../../typeorm/repositories/RamaisRepository'

interface IRequestDTO{

  uuidramal: string;

}
 class DeleteRamaisService {

     public async execute( {uuidramal}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(RamaisRepository);

      const service = await usersRepository.findOne(uuidramal);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await usersRepository.remove(service);
      }
  }

export default DeleteRamaisService;