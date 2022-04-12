import { getCustomRepository, getRepository } from "typeorm";
import AppError from "../../../../shared/errors/AppErrors";
import ProjetosView from "@modules/typeorm/entities/ProjetosView";
import ProjetosViewRepository from "@modules/typeorm/repositories/ProjetosViewRepository";


interface IRequestDTO {
  nprojeto:string;
  contrato:string;
  status:string;
}


class LoadProjectsServices{

  public async loadProjetos ({nprojeto,contrato, status}: IRequestDTO): Promise<ProjetosView[] | Error> {

      const projetosRepository = getCustomRepository(ProjetosViewRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const projeto = await projetosRepository.createQueryBuilder().select()
      .where('(nprojeto ILIKE :nprojeto and contrato ILIKE :contrato) or status ilike :status', {nprojeto: `%${nprojeto}%`,contrato:`%${contrato}%`, status:`%${status}%`}).getMany();

      if(!projeto){
        throw new AppError ('Não Existe',405);
      }

      return projeto;
  }

}

export default LoadProjectsServices;
