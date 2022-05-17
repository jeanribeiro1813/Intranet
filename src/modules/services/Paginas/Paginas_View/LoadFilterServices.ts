import {getRepository } from "typeorm";
import Paginas from '../../../../shared/infra/typeorm/entities/Paginas';
import AppError from '../../../../shared/errors/AppErrors';


interface IRequestDTO {
  cod_page_uuid: string;
}


class LoadFilterServices{
  public async filter ({cod_page_uuid}: IRequestDTO): Promise < Paginas[] | AppError > {

      const Repository = getRepository(Paginas);

      //Criando um Select personalizado como filtrando 2 colunas
      const result = await Repository.createQueryBuilder().select()
      .where(`cod_page_uuid :: text  ILIKE :cod_page_uuid `, 
      {cod_page_uuid: `%${cod_page_uuid}%`}).getMany();

      if(!result){
        throw new AppError ('Não Existe',40);
      }
      
      return result;
}
  }


export default LoadFilterServices;
