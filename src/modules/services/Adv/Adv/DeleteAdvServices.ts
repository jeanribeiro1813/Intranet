import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Atividades from '../../../typeorm/entities/Atividades';
import AtividadeRepository from '../../../typeorm/repositories/AtividadeRepository'

interface IRequestDTO{

  codadv: string;

}
 class DeleteClientesService {

     public async delete( {codadv}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(AtividadeRepository);

      const service = await Repository.findOne(codadv);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await Repository.remove(service);
      }
  }

export default DeleteClientesService;