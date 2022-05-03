import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Chamados from '../../../typeorm/entities/Chamados';
import ChamadosRepository from '../../../typeorm/repositories/ChamadosRepository'

interface IRequestDTO{

  cod_chamado_uuid:string;

}
 class DeleteChamadosService {

     public async delete( {cod_chamado_uuid}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(ChamadosRepository);

      const service = await Repository.findOne(cod_chamado_uuid);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await Repository.remove(service);
      }
  }

export default DeleteChamadosService;