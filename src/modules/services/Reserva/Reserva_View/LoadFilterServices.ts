import { getCustomRepository } from "typeorm";
import Reserva from '../../../typeorm/entities/Reserva';
import ReservaRepository from '../../../typeorm/repositories/ReservaRepository'
import AppError from '../../../../shared/errors/AppErrors';


interface IRequestDTO {
  cod_reserva: number;
}


class LoadFilterServices{
  public async filter ({cod_reserva}: IRequestDTO): Promise < Reserva[] | AppError > {

      const Repository = getCustomRepository(ReservaRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const result = await Repository.createQueryBuilder().select()
      .where(`cod_reserva :: text  ILIKE :cod_reserva `, 
      {cod_reserva: `%${cod_reserva}%`}).getMany();

      if(!result){
        throw new AppError ('Não Existe',40);
      }
      
      return result;
}
  }


export default LoadFilterServices;
