import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Projetos from '../../../../shared/infra/typeorm/entities/Projetos';
import ProjetosRepository from '../../../../shared/infra/typeorm/repositories/ProjetosRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'




interface IRequestDTO {
  uuidprojeto:string;
  data:string;
  nprojeto:string;
  contrato:string;
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

  @injectable()
  class CreateProjetosService {
  
      constructor(
          @inject('ProjetosRepository')
          private projetosRepository: ProjetosRepository){
          
        }

    public async execute({uuidprojeto,nprojeto,data,contrato,projeto,cliente,cliente2 ,
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
      cod_proj}: IRequestDTO): Promise<Projetos | Error> {

      const redisCache = new RedisCache();

      const checkUserExists = await this.projetosRepository.findById(uuidprojeto);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const project =  this.projetosRepository.create({
        
        uuidprojeto,nprojeto,data,contrato,projeto,cliente, cliente2,
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
      cod_proj

      });

      await redisCache.invalidation('API_REDIS_PROJETOS');

      return project;
    }
  }

  export default CreateProjetosService;
