import { getCustomRepository,getRepository } from 'typeorm'
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

  class UpdateChamadosService {

    public async update({cod_chamado_uuid,cod_usuario, equipamento,descricao,prioridade,
      dt_solicitacao,dt_conclusao,desc_conclusao,cod_chamado}: IRequestDTO): Promise<Chamados | Error> {

      const usersRepository = getCustomRepository(ChamadosRepository);

      const chamados = await usersRepository.findOne(cod_chamado_uuid);

      if (!chamados) {
        throw new AppError ('chamados não existe',404);
      }


      chamados.cod_usuario = cod_usuario ? cod_usuario : chamados.cod_usuario;
      chamados.equipamento = equipamento ? equipamento : chamados.equipamento;
      chamados.descricao = descricao ? descricao : chamados.descricao;
      chamados.prioridade = prioridade ? prioridade : chamados.prioridade;
      chamados.dt_solicitacao = dt_solicitacao ? dt_solicitacao : chamados.dt_solicitacao;
      chamados.dt_conclusao = dt_conclusao ? dt_conclusao : chamados.dt_conclusao;
      chamados.desc_conclusao = desc_conclusao ? desc_conclusao : chamados.desc_conclusao;
      chamados.cod_chamado = cod_chamado ? cod_chamado : chamados.cod_chamado;



      await usersRepository.save(chamados);

      return chamados;
    }
  }

  export default UpdateChamadosService;
