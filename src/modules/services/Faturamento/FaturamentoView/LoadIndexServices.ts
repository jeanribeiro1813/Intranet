import { getCustomRepository, getRepository } from "typeorm";
import FaturamentoViewsRepository from '../../../typeorm/repositories/FaturamentoViewsRepository';
import Faturamento from '../../../typeorm/entities/FaturamentoView';
import AppError from "../../../../shared/errors/AppErrors";

interface IRequestDTO {
  uuidfat:string;
}


class LoadIndexServices{

  public async index ({uuidfat}: IRequestDTO): Promise<Faturamento | undefined> {

      const Repository = getCustomRepository(FaturamentoViewsRepository);

      const result = await Repository.findByCode(uuidfat);

      if(!result){
        throw new AppError ('Não Existe',404);
      }

      return result;
  }
}

export default LoadIndexServices;
