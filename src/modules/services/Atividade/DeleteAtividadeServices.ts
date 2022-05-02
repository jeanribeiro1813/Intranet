import AppError from '../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Atividades from '../../typeorm/entities/Atividades';
import AtividadeRepository from '../../typeorm/repositories/AtividadeRepository'

interface IRequestDTO{

  uuidatividade: string;

}
 class DeleteClientesService {

     public async execute( {uuidatividade}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(AtividadeRepository);

      const service = await usersRepository.findOne(uuidatividade);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await usersRepository.remove(service);
      }
  }

export default DeleteClientesService;