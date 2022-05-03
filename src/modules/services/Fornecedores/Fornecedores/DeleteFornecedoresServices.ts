import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Fornecedores from '../../../typeorm/entities/Fornecedores';
import FornecedoresRepository from '../../../typeorm/repositories/FornecedoresRepository'

interface IRequestDTO{

  uuidusuario: string;

}
 class DeleteFornecedoresService {

     public async delete( {uuidusuario}: IRequestDTO) : Promise<void> {

      const fornecedoresRepository = getCustomRepository(FornecedoresRepository);

      const service = await fornecedoresRepository.findOne(uuidusuario);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await fornecedoresRepository.remove(service);
      }
  }

export default DeleteFornecedoresService;