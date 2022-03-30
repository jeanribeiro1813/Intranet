import { getCustomRepository, getRepository } from "typeorm";
import FaturamentoRepository from '../../../modules/typeorm/repositories/FaturamentoRepository';
import Faturamento from '../../../modules/typeorm/entities/Faturamento';
import AppError from "../../../shared/errors/AppErrors";



interface IRequestDTO {
  cod_fat:string;

}





class LoadIndexServices{
  public async execute ({cod_fat}: IRequestDTO): Promise<Faturamento | undefined> {

      const projetosRepository = getCustomRepository(FaturamentoRepository);

      const index_Prod = await projetosRepository.findByCode(cod_fat);

      if(!index_Prod){
        throw new AppError ('Não Existe',404);
      }

      return index_Prod;
  }
}

export default LoadIndexServices;
