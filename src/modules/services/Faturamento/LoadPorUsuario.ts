import { getCustomRepository, getRepository } from "typeorm";
import FaturamentoRepository from '../../typeorm/repositories/FaturamentoRepository';
import Faturamento from '../../typeorm/entities/Faturamento';
import AppError from "../../../shared/errors/AppErrors";




interface IRequestDTO {
  usuario:string;
  mes:string
}





class LoadPorUsersServices{
  public async execute ({usuario,mes}: IRequestDTO): Promise<Faturamento[] | Error> {

      const projetosRepository = getCustomRepository(FaturamentoRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const index_Prod = await projetosRepository.createQueryBuilder().select()
      .where('usuario ILIKE :usuario and mes ILIKE :mes ', {usuario: `%${usuario}%`,mes:`%${mes}%`}).getMany();

      console.log(index_Prod)

      if(!index_Prod){
        throw new AppError ('Não Existe',40);
      }

      return index_Prod;
  }
}

export default LoadPorUsersServices;
