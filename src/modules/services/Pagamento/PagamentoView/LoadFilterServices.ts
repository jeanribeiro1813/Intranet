import { getRepository } from "typeorm";
import PagamentoView from '../../../../shared/infra/typeorm/entities/PagamentoView';
import AppError from '../../../../shared/errors/AppErrors';


interface IRequestDTO {
  incidencia: string;
}


class LoadFilterServices{
  public async filter ({incidencia}: IRequestDTO): Promise < PagamentoView[] | AppError > {

      const projetosRepository = getRepository(PagamentoView);

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
