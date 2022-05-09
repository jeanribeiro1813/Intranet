import { getCustomRepository, getRepository } from "typeorm";
import AppError from "../../../../shared/errors/AppErrors";
import ProjetosView from "../../../../shared/infra/typeorm/entities/ProjetosView";
import ProjetosViewRepository from "../../../../shared/infra/typeorm/repositories/ProjetosViewRepository";


interface IRequestDTO {

  status:string;
  departamento:string;
  nprojeto:string;
  contrato:string;


}


class LoadProjectsServices{

  public async loadProjetos ({departamento, status,nprojeto,contrato}: IRequestDTO): Promise<ProjetosView[] | Error> {

      const projetosRepository = getCustomRepository(ProjetosViewRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const projeto = await projetosRepository.createQueryBuilder().select()
      .where('(departamento ILIKE :departamento AND status ilike :status) OR (contrato ILIKE :contrato AND nprojeto ILIKE :nprojeto) ', 
      {departamento:`%${departamento}%`, status:`%${status}%`,contrato:`%${contrato}%`,nprojeto:`%${nprojeto}%`}).getMany();

      if(!projeto){
        throw new AppError ('Não Existe',405);
      }

      return projeto;
  }

}

export default LoadProjectsServices;
