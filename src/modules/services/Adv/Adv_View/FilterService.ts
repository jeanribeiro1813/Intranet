import { getCustomRepository, getRepository } from "typeorm";
import AppError from "../../../../shared/errors/AppErrors";
import Adv from "../../../../shared/infra/typeorm/entities/Adv";
import AdvRepository from "../../../../shared/infra/typeorm/repositories/AdvRepository";


interface IRequestDTO {
    cod_page:number;
    cod_adv: string;

}


class FilterService{

  public async filter ({cod_page,cod_adv}: IRequestDTO): Promise<Adv[] | AppError> {

      const Repository = getCustomRepository(AdvRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const result = await Repository.createQueryBuilder().select()
      .where('(cod_page ILIKE :cod_page and cod_adv ILIKE :cod_adv) or status ilike :status', {cod_page: `%${cod_page}%`,cod_adv:`%${cod_adv}%`}).getMany();

      if(!result){
        throw new AppError ('Não Existe',405);
      }

      return result;
  }

}

export default FilterService;
