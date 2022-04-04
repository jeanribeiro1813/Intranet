import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Chamados from '../../typeorm/entities/Chamados';
import ChamadosRepository from '../../typeorm/repositories/ChamadosRepository'




interface IRequestDTO {

  cod_chamado_uuid: string;
  cod_usuario:number;
  equipamento:string;
  descricao:string;
  prioridade:string;
  dt_solicitacao: string;
  dt_conclusao:string;
  desc_conclusao:string;
  cod_chamado: number;
  


  }

  class CreateChamadosService {

    public async execute({ cod_chamado_uuid,cod_usuario, equipamento,descricao,prioridade,
      dt_solicitacao,dt_conclusao,desc_conclusao,cod_chamado}: IRequestDTO): Promise<Chamados | Error> {

      const chamadosRepository = getCustomRepository(ChamadosRepository);

      const checkUserExists = await chamadosRepository.findByCod(cod_chamado_uuid);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const chamados =  chamadosRepository.create({

        cod_usuario, equipamento,descricao,prioridade,
        dt_solicitacao,dt_conclusao,desc_conclusao,cod_chamado

      });

      await chamadosRepository.save(chamados);

      return chamados;
    }
  }

  export default CreateChamadosService;
