import { getCustomRepository, getRepository } from "typeorm";
import AppError from "../../../../shared/errors/AppErrors";
import ProjetosView from "../../../typeorm/entities/ProjetosView";
import ProjetosViewRepository from "../../..//typeorm/repositories/ProjetosViewRepository";


interface IRequestDTO {

  status:string;
  departamento:string
}


class LoadProjectsServices{

  public async loadProjetos ({departamento, status}: IRequestDTO): Promise<ProjetosView[] | Error> {

      const projetosRepository = getCustomRepository(ProjetosViewRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const projeto = await projetosRepository.createQueryBuilder().select()
      .where('departamento ILIKE :departamento and status ilike :status', {departamento:`%${departamento}%`, status:`%${status}%`}).getMany();

      if(!projeto){
        throw new AppError ('Não Existe',405);
      }

      return projeto;
  }

}

export default LoadProjectsServices;
