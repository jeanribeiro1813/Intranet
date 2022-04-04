import { getCustomRepository } from 'typeorm'
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

  class CreateFatService {

    public async execute({cod_proj_uuid,data,contrato,co,projeto,cliente,cliente2, 
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

      const projRepository = getCustomRepository(ProjetosRepository);

      const checkUserExists = await projRepository.findByCode(cod_proj_uuid);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const project =  projRepository.create({
        
      data,contrato,co,projeto,cliente,cliente2, 
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
      cod_proj,

      });

      await projRepository.save(project);

      return project;
    }
  }

  export default CreateFatService;
