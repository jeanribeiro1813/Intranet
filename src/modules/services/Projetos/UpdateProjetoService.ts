import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Projetos from '../../typeorm/entities/Projetos';
import ProjetosRepository from '../../typeorm/repositories/ProjetosRepository'


interface IRequestDTO {
  cod_proj_uuid:string;
  data:string;
  contrato:string;
  co:string;
  projeto:string;
  cliente:string;
  cliente2:string;
  numero:string;
  gerente:string;
  coordenador:string;
  equipe:string;
  status:string;
  proposta:string;
  departamento:string;
  previsao:string;
  nproc_origem:string;
  valor:string;
  memoalt:string;
  dt_fim:string;
  cod_proj:number;


  }

  class UpdateprojetosService {

    public async updateProj({cod_proj_uuid,data,contrato,co,projeto,cliente,cliente2, 
  numero,
  gerente,
  coordenador,
  equipe,
  status,
  proposta,
  departamento,
  previsao,
  nproc_origem,
  valor,
  memoalt,
  dt_fim,
  cod_proj,}: IRequestDTO): Promise<Projetos | Error> {

      const usersRepository = getCustomRepository(ProjetosRepository);

      const projetos = await usersRepository.findOne(cod_proj_uuid);

      if (!projetos) {
        throw new AppError ('projetos não existe',404);
      }

      projetos.contrato = contrato ? contrato : projetos.contrato;
      projetos.data = data ? data : projetos.data;
      projetos.departamento = departamento ? departamento : projetos.departamento;
      projetos.co = co ? co : projetos.co;
      projetos.projeto = projeto ? projeto : projetos.projeto;
      projetos.cliente = cliente ? cliente : projetos.cliente;
      projetos.cliente2 = cliente2 ? cliente2 : projetos.cliente2;
      projetos.numero = numero ? numero : projetos.numero;
      projetos.gerente = gerente ? gerente : projetos.gerente;
      projetos.coordenador = coordenador ? coordenador: projetos.coordenador;
      projetos.equipe = equipe ? equipe: projetos.equipe;
      projetos.status = status ? status: projetos.status;
      projetos.proposta = proposta ? proposta: projetos.proposta;
      projetos.previsao = previsao ? previsao: projetos.previsao;
      projetos.nproc_origem = nproc_origem ? nproc_origem: projetos.nproc_origem;
      projetos.valor = valor ? valor: projetos.valor;
      projetos.memoalt = memoalt ? memoalt: projetos.memoalt;
      projetos.dt_fim = dt_fim ? dt_fim: projetos.dt_fim;
      projetos.cod_proj = cod_proj ? cod_proj: projetos.cod_proj;




      await usersRepository.save(projetos);

      return projetos;
    }
  }

  export default UpdateprojetosService;
