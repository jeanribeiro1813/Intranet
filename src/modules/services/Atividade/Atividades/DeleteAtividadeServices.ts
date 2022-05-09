import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Atividades from '../../../../shared/infra/typeorm/entities/Atividades';
import AtividadeRepository from '../../../../shared/infra/typeorm/repositories/AtividadeRepository'

interface IRequestDTO{

  uuidatividade: string;

}
 class DeleteClientesService {

     public async delete( {uuidatividade}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(AtividadeRepository);

      const service = await Repository.findOne(uuidatividade);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await Repository.remove(service);
      }
  }

export default DeleteClientesService;