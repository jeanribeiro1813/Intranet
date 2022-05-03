import { getCustomRepository, getRepository } from "typeorm";
import AppError from "../../../../shared/errors/AppErrors";
import ProjetosView from "../../../typeorm/entities/ProjetosView";
import ProjetosViewRepository from "../../..//typeorm/repositories/ProjetosViewRepository";


interface IRequestDTO {
  nprojeto:string;
  status:string;
  departamento:string
}


class LoadProjectsServices{

  public async loadProjetos ({nprojeto,departamento, status}: IRequestDTO): Promise<ProjetosView[] | Error> {

      const projetosRepository = getCustomRepository(ProjetosViewRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const projeto = await projetosRepository.createQueryBuilder().select()
      .where('nprojeto ILIKE :nprojeto or departamento ILIKE :departamento or status ilike :status', {nprojeto: `%${nprojeto}%`,departamento:`%${departamento}%`, status:`%${status}%`}).getMany();

      if(!projeto){
        throw new AppError ('Não Existe',405);
      }

      return projeto;
  }

}

export default LoadProjectsServices;
