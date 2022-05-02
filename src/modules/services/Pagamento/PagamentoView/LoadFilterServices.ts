import { getCustomRepository } from "typeorm";
import PagamentoView from '../../../typeorm/entities/PagamentoView';
import PagamentoViewRepository from '../../../typeorm/repositories/PagamentoViewRepository'
import AppError from '../../../../shared/errors/AppErrors';


interface IRequestDTO {
  uuidpagamento: string;
}


class LoadFilterServices{
  public async filter ({uuidpagamento}: IRequestDTO): Promise < PagamentoView[] | AppError > {

      const projetosRepository = getCustomRepository(PagamentoViewRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const index_Prod = await projetosRepository.createQueryBuilder().select()
      .where(`uuidpagamento :: text  ILIKE :uuidpagamento `, 
      {uuidpagamento: `%${uuidpagamento}%`}).getMany();

      if(!index_Prod){
        throw new AppError ('Não Existe',40);
      }
      
      return index_Prod;
}
  }


export default LoadFilterServices;
