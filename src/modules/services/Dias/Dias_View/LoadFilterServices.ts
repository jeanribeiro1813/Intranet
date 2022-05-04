import { getCustomRepository } from "typeorm";
import Dias from '../../../typeorm/entities/Dias';
import DiasRepository from '../../../typeorm/repositories/DiasRepository'
import AppError from '../../../../shared/errors/AppErrors';


interface IRequestDTO {

  ano:string;
  mes: string;
  dias: string;

}


class LoadFilterServices{
  public async filter ({ano,mes,dias}: IRequestDTO): Promise < Dias[] | AppError > {

      const Repository = getCustomRepository(DiasRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const result = await Repository.createQueryBuilder().select()
      .where(`ano :: text  ILIKE :ano or mes :: text  ILIKE :mes or dias :: text  ILIKE :dias `, 
      {ano: `%${ano}%`,
      mes: `%${mes}%`,
      dias: `%${dias}%`}).getMany();

      if(!result){
        throw new AppError ('Não Existe',40);
      }
      
      return result;
}
  }


export default LoadFilterServices;
