import { getCustomRepository } from "typeorm";
import Dias from '../../../../shared/infra/typeorm/entities/Dias';
import DiasRepository from '../../../../shared/infra/typeorm/repositories/DiasRepository'
import AppError from '../../../../shared/errors/AppErrors';


interface IRequestDTO {

  ano:string;
  mes:string;


}


class LoadFilterServices{
  public async filter ({ano,mes}: IRequestDTO): Promise < Dias[] | AppError > {

      const Repository = getCustomRepository(DiasRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const result = await Repository.createQueryBuilder().select()
      .where(`(ano :: text  ILIKE :ano and mes :: text  ILIKE :mes) `, 
      {ano: `%${ano}%` , mes: `%${mes}%`}).getMany();

      if(!result){
        throw new AppError ('Não Existe',40);
      }
      
      return result;
}
  }


export default LoadFilterServices;
