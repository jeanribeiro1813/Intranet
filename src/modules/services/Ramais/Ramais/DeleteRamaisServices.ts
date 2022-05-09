import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import RamaisRepository from '../../../../shared/infra/typeorm/repositories/RamaisRepository'

interface IRequestDTO{

  uuidramal: string;

}
 class DeleteRamaisService {

     public async delete( {uuidramal}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(RamaisRepository);

      const service = await Repository.findOne(uuidramal);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await Repository.remove(service);
      }
  }

export default DeleteRamaisService;