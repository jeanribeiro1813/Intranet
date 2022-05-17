import {getRepository } from "typeorm";
import Dias from '../../../../shared/infra/typeorm/entities/Dias';
import AppError from '../../../../shared/errors/AppErrors';


interface IRequestDTO {

  ano:string;
  codigo:string;


}


class LoadFilterServices{
  public async filter ({ano,codigo}: IRequestDTO): Promise < Dias[] | AppError > {

      const Repository = getRepository(Dias);

      //Criando um Select personalizado como filtrando 2 colunas
      const result = await Repository.createQueryBuilder().select()
      .where(`(ano :: text  ILIKE :ano and codigo :: text  ILIKE :codigo) `, 
      {ano: `%${ano}%` , codigo: `%${codigo}%`}).getMany();

      if(!result){
        throw new AppError ('Não Existe',40);
      }
      
      return result;
}
  }


export default LoadFilterServices;
