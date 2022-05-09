import { getCustomRepository, getRepository } from "typeorm";
import FuncionarioRepository from '../../../../shared/infra/typeorm/repositories/FuncionarioRepository'
import Funcionarios from '../../../../shared/infra/typeorm/entities/Funcionarios'
import AppError from "../../../../shared/errors/AppErrors";

interface IRequestDTO {
  cod_func_uuid:string;
}


class LoadIndexServices{

  public async index ({cod_func_uuid}: IRequestDTO): Promise<Funcionarios | undefined> {

      const Repository = getCustomRepository(FuncionarioRepository);

      const result = await Repository.findById(cod_func_uuid);

      if(!result){
        throw new AppError ('Não Existe',404);
      }

      return result;
  }
}

export default LoadIndexServices;
