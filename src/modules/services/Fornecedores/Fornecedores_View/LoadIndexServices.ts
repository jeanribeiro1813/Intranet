import { getCustomRepository, getRepository } from "typeorm";
import FornecedoresRepository from '../../../typeorm/repositories/FornecedoresRepository'
import Fornecedores from '../../../typeorm/entities/Fornecedores'
import AppError from "../../../../shared/errors/AppErrors";

interface IRequestDTO {
  uuidusuario:string;
}


class LoadIndexServices{

  public async index ({uuidusuario}: IRequestDTO): Promise<Fornecedores | undefined> {

      const Repository = getCustomRepository(FornecedoresRepository);

      const result = await Repository.findById(uuidusuario);

      if(!result){
        throw new AppError ('Não Existe',404);
      }

      return result;
  }
}

export default LoadIndexServices;
