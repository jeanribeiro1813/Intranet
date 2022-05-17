import { getRepository } from "typeorm";
import Ramais from '../../../../shared/infra/typeorm/entities/Ramais';
import AppError from '../../../../shared/errors/AppErrors';


interface IRequestDTO {
  ramal:number;
  cod_atv:string;
}


class LoadFilterServices{
  public async filter ({ramal,cod_atv}: IRequestDTO): Promise < Ramais[] | AppError > {

      const Repository = getRepository(Ramais);

      //Criando um Select personalizado como filtrando 2 colunas
      const result = await Repository.createQueryBuilder().select()
      .where(`cod_atv :: text  ILIKE :cod_atv or ramal :: text  ILIKE :ramal `, 
      {cod_atv: `%${cod_atv}%`,ramal: `%${ramal}%`}).getMany();

      if(!result){
        throw new AppError ('Não Existe',40);
      }
      
      return result;
}
  }


export default LoadFilterServices;
