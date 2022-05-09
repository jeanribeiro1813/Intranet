import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Atividades from '../../../../shared/infra/typeorm/entities/Atividades';
import AtividadeRepository from '../../../../shared/infra/typeorm/repositories/AtividadeRepository'

interface IRequestDTO{

  cod_manutencao_uuid: string;


}
 class DeleteManutencaoService {

     public async delete( {cod_manutencao_uuid}: IRequestDTO) : Promise<void> {

      const usersRepository = getCustomRepository(AtividadeRepository);

      const service = await usersRepository.findOne(cod_manutencao_uuid);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }
      await usersRepository.remove(service);
      }
  }

export default DeleteManutencaoService;