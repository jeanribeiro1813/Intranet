import { getCustomRepository, getRepository } from "typeorm";
import Manutencoes from '../../../../shared/infra/typeorm/entities/Manutencoes';
import ManuntencoesRepository from '../../../../shared/infra/typeorm/repositories/ManuntencoesRepository'
import AppError from "../../../../shared/errors/AppErrors";

interface IRequestDTO {
  cod_func_uuid:string;
}


class LoadIndexServices{

  public async index ({cod_func_uuid}: IRequestDTO): Promise<Manutencoes | undefined> {

      const Repository = getCustomRepository(ManuntencoesRepository);

      const result = await Repository.findById(cod_func_uuid);

      if(!result){
        throw new AppError ('Não Existe',404);
      }

      return result;
  }
}

export default LoadIndexServices;
