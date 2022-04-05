import { getCustomRepository, getRepository } from "typeorm";
import FaturamentoViewsRepository from '../../../../modules/typeorm/repositories/FaturamentoViewsRepository';
import FaturamentoView from '../../../../modules/typeorm/entities/FaturamentoView'
import AppError from "../../../../shared/errors/AppErrors";



interface IRequestDTO {
  codfat:string;

}





class LoadIndexServices{
  public async execute ({codfat}: IRequestDTO): Promise<FaturamentoView | undefined> {

      const projetosRepository = getCustomRepository(FaturamentoViewsRepository);

      const index_Prod = await projetosRepository.findByCode(codfat);

      if(!index_Prod){
        throw new AppError ('Não Existe',404);
      }

      return index_Prod;
  }
}

export default LoadIndexServices;
