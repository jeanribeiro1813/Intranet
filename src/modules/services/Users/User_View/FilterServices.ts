import { getRepository } from "typeorm";
import AppError from "../../../../shared/errors/AppErrors";
import Entitie from "../../../../shared/infra/typeorm/entities/UsersView";


interface IRequestDTO {
  status:string;
}


class FilterServices{

  public async filterService ({status}: IRequestDTO): Promise<Entitie[] | Error> {

      const repository = getRepository(Entitie);

      const result = await repository.createQueryBuilder().select()
      .where('status ilike :status', {status:`%${status}%`}).getMany();

      if(!result){
        throw new AppError ('Não Existe',405);
      }

      return result;
  }

}

export default FilterServices;


