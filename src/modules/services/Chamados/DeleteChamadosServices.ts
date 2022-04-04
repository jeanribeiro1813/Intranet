import AppError from '@shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Chamados from '../../typeorm/entities/Chamados';
import ChamadosRepository from '../../typeorm/repositories/ChamadosRepository'

interface IRequestDTO{

  cod_chamado_uuid:string;

}
 class DeleteChamadosService {

     public async execute( {cod_chamado_uuid}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(ChamadosRepository);

      const service = await usersRepository.findOne(cod_chamado_uuid);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await usersRepository.remove(service);
      }
  }

export default DeleteChamadosService;