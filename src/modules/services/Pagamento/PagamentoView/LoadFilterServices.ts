import { getCustomRepository } from "typeorm";
import PagamentoView from '../../../../shared/infra/typeorm/entities/PagamentoView';
import PagamentoViewRepository from '../../../../shared/infra/typeorm/repositories/PagamentoViewRepository'
import AppError from '../../../../shared/errors/AppErrors';


interface IRequestDTO {
  data_pagto: string;
}


class LoadFilterServices{
  public async filter ({data_pagto}: IRequestDTO): Promise < PagamentoView[] | AppError > {

      const projetosRepository = getCustomRepository(PagamentoViewRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const index_Prod = await projetosRepository.createQueryBuilder().select()
      .where(`substring(data_pagto::text, 1,4) ILIKE :data_pagto and substring(data_pagto::text, 6,2) ILIKE :data_pagto `, 
      {data_pagto: `%${data_pagto}%`,}).getMany();

      if(!index_Prod){
        throw new AppError ('Não Existe',40);
      }
      
      return index_Prod;
}
  }


export default LoadFilterServices;
