import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Contrato from '../../../../shared/infra/typeorm/entities/Contrato';
import ContratoRepository from '../../../../shared/infra/typeorm/repositories/ContratoRepository'

interface IRequestDTO{

  uuidcontrato: string;

}
 class DeleteClientesService {

     public async delete( {uuidcontrato}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(ContratoRepository);

      const service = await Repository.findOne(uuidcontrato);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await Repository.remove(service);
      }
  }

export default DeleteClientesService;