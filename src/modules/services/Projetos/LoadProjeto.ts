import { getCustomRepository, getRepository } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import Projetos from "@modules/typeorm/entities/Projetos";
import ProjetosRepository from "@modules/typeorm/repositories/ProjetosRepository";




interface IRequestDTO {
  nprojeto:string;
  contrato:string;
}



class LoadProjetoServices{
  public async loadProjetos ({nprojeto,contrato}: IRequestDTO): Promise<Projetos[] | Error> {

      const projetosRepository = getCustomRepository(ProjetosRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const index_Prod = await projetosRepository.createQueryBuilder().select()
      .where('nprojeto ILIKE :nprojeto and contrato ILIKE :contrato', {nprojeto: `%${nprojeto}%`,contrato:`%${contrato}%`}).getMany();

      if(!index_Prod){
        throw new AppError ('Não Existe',405);
      }

      return index_Prod;
  }
}

export default LoadProjetoServices;
