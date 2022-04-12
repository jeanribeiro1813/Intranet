import AppError from '@shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Fornecedores from '../../typeorm/entities/Fornecedores';
import FornecedoresRepository from '../../typeorm/repositories/FornecedoresRepository'

interface IRequestDTO{

  uuidfornece: string;

}
 class DeleteFornecedoresService {

     public async execute( {uuidfornece}: IRequestDTO) : Promise<void> {

      const fornecedoresRepository = getCustomRepository(FornecedoresRepository);

      const service = await fornecedoresRepository.findOne(uuidfornece);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await fornecedoresRepository.remove(service);
      }
  }

export default DeleteFornecedoresService;