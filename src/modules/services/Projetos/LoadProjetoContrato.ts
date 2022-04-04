import { getCustomRepository, getRepository } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import Projetos from "@modules/typeorm/entities/Projetos";
import ProjetosRepository from "@modules/typeorm/repositories/ProjetosRepository";




interface IRequestDTO {
  contrato:string;
  co:string;
  status:string;
}





class LoadPorUsersServices{
  public async loadProjetos ({contrato,co,status}: IRequestDTO): Promise<Projetos[] | Error> {

      const projetosRepository = getCustomRepository(ProjetosRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const index_Prod = await projetosRepository.createQueryBuilder().select()
      .where('contrato ILIKE :contrato and co ILIKE :co and status ILIKE :status  ', {contrato: `%${contrato}%`,co:`%${co}%`,status:`%${status}%`}).getMany();

      console.log(index_Prod)

      if(!index_Prod){
        throw new AppError ('Não Existe',405);
      }

      console.log(index_Prod);
      return index_Prod;
  }
}

export default LoadPorUsersServices;
