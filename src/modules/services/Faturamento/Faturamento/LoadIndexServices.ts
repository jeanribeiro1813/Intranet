import { getCustomRepository, getRepository } from "typeorm";
import FaturamentoViewsRepository from '../../../../modules/typeorm/repositories/FaturamentoViewsRepository';
import Faturamento from '../../../../modules/typeorm/entities/FaturamentoView';
import AppError from "../../../../shared/errors/AppErrors";

interface IRequestDTO {
  uuidfat:string;
}


class LoadIndexServices{

  public async load ({uuidfat}: IRequestDTO): Promise<Faturamento | undefined> {

      const repository = getCustomRepository(FaturamentoViewsRepository);

      const index = await repository.findByCode(uuidfat);

      if(!index){
        throw new AppError ('Não Existe',404);
      }

      return index;
  }
}

export default LoadIndexServices;
