import { getCustomRepository, getRepository } from "typeorm";
import AppError from "../../../../shared/errors/AppErrors";
import ProjetosView from "../../../typeorm/entities/ProjetosView";
import ProjetosViewRepository from "../../..//typeorm/repositories/ProjetosViewRepository";


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
      .where(' nprojeto ILIKE :nprojeto or departamento ILIKE :departamento or status ilike :status or contrato ILIKE :contrato ', 
      {nprojeto:`%${nprojeto}%`,departamento:`%${departamento}%`, status:`%${status}%`,contrato:`%${contrato}%`}).getMany();

      if(!projeto){
        throw new AppError ('Não Existe',405);
      }

      return projeto;
  }

}

export default LoadProjectsServices;
