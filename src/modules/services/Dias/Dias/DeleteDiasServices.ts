import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import DiasRepository from '../../../typeorm/repositories/DiasRepository'

interface IRequestDTO{

  uuiddiasuteis: string;

}
 class DeletePaginasService {

     public async delete( {uuiddiasuteis}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(DiasRepository);

      const service = await Repository.findOne(uuiddiasuteis);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await Repository.remove(service);
      }
  }

export default DeletePaginasService;