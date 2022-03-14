import { getCustomRepository } from "typeorm";
import FaturamentoRepository from '../../typeorm/repositories/FaturamentoRepository';
import Faturamento from '../../typeorm/entities/Faturamento';
import AppError from "../../../shared/errors/AppErrors";



interface IRequestDTO {

  cod_fat:string;


}





class LoadIndexFaturamento{
  public async indexShow ({cod_fat}: IRequestDTO): Promise<Faturamento | Error> {

      const projetosrRepository = getCustomRepository(FaturamentoRepository);

      const index = await projetosrRepository.findByCode(cod_fat);

      if(!index){
        throw new AppError ('Não Existe',404);
      }



      return index;
  }
}

export default LoadIndexFaturamento;
