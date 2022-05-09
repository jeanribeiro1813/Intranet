import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Projetos from '../../../../shared/infra/typeorm/entities/Projetos';
import ProjetosRepository from '../../../../shared/infra/typeorm/repositories/ProjetosRepository'




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

  class CreateFatService {

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

      const projRepository = getCustomRepository(ProjetosRepository);

      const checkUserExists = await projRepository.findByCode(uuidprojeto);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const project =  projRepository.create({
        
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

      await projRepository.save(project);

      return project;
    }
  }

  export default CreateFatService;
