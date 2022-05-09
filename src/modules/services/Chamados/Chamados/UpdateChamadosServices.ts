import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Chamados from '../../../../shared/infra/typeorm/entities/Chamados';
import ChamadosRepository from '../../../../shared/infra/typeorm/repositories/ChamadosRepository'
import RedisCache from '../../../../shared/cache/RedisCache';


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

      const Repository = getCustomRepository(ChamadosRepository);
      
      const redisCache = new RedisCache();


      const result = await Repository.findOne(cod_chamado_uuid);

      if (!result) {
        throw new AppError ('chamados não existe',404);
      }

      await redisCache.invalidation('API_REDIS_SUMMARY');

      result.cod_usuario = cod_usuario ? cod_usuario : result.cod_usuario;
      result.equipamento = equipamento ? equipamento : result.equipamento;
      result.descricao = descricao ? descricao : result.descricao;
      result.prioridade = prioridade ? prioridade : result.prioridade;
      result.dt_solicitacao = dt_solicitacao ? dt_solicitacao : result.dt_solicitacao;
      result.dt_conclusao = dt_conclusao ? dt_conclusao : result.dt_conclusao;
      result.desc_conclusao = desc_conclusao ? desc_conclusao : result.desc_conclusao;
      result.cod_chamado = cod_chamado ? cod_chamado : result.cod_chamado;



      await Repository.save(result);

      return result;
    }
  }

  export default UpdateChamadosService;
