import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Chamados from '../../../typeorm/entities/Chamados';
import ChamadosRepository from '../../../typeorm/repositories/ChamadosRepository'




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

    public async create({ cod_chamado_uuid,cod_usuario, equipamento,descricao,prioridade,
      dt_solicitacao,dt_conclusao,desc_conclusao,cod_chamado}: IRequestDTO): Promise<Chamados | Error> {

      const Repository = getCustomRepository(ChamadosRepository);

      const result = await Repository.findByCod(cod_chamado_uuid);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const chamados =  Repository.create({

        cod_usuario, equipamento,descricao,prioridade,
        dt_solicitacao,dt_conclusao,desc_conclusao,cod_chamado

      });

      await Repository.save(chamados);

      return chamados;
    }
  }

  export default CreateChamadosService;
