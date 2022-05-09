import { getCustomRepository } from "typeorm";
import PagamentoView from '../../../../shared/infra/typeorm/entities/PagamentoView';
import PagamentoViewRepository from '../../../../shared/infra/typeorm/repositories/PagamentoViewRepository'
import AppError from '../../../../shared/errors/AppErrors';


interface IRequestDTO {
  incidencia: string;
}


class LoadFilterServices{
  public async filter ({incidencia}: IRequestDTO): Promise < PagamentoView[] | AppError > {

      const projetosRepository = getCustomRepository(PagamentoViewRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const index_Prod = await projetosRepository.createQueryBuilder().select()
      .where(`incidencia::text ILIKE :incidencia  `, 
      {incidencia: `%${incidencia}%`,}).getMany();

      if(!index_Prod){
        throw new AppError ('Não Existe',40);
      }
      
      return index_Prod;
}
  }


export default LoadFilterServices;
