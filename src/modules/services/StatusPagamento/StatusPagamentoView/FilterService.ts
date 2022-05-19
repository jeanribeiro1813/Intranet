import StatusPagamento from "../../../../shared/infra/typeorm/entities/StatusPagamento";
import { getCustomRepository } from "typeorm";
import StatusPagamentoRepository from '../../../../shared/infra/typeorm/repositories/StatusPagamentoRepository'
import AppError from "../../../../shared/errors/AppErrors";



interface IResponseDTO {

visivel: string;

}





class LoadPorUsersServices{
  public async filter ( {visivel}: IResponseDTO ): Promise< StatusPagamento[] | AppError > {

      const projetosRepository = getCustomRepository(StatusPagamentoRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const index_Prod = await projetosRepository.createQueryBuilder().select()
      .where(`visivel ::text ILIKE :visivel  `, 
      {visivel: `%${visivel}%`}).getMany();

      console.log(`visivel ILIKE :visivel  `, 
    {visivel: `%${visivel}%`});

      if(!index_Prod){
        throw new AppError ('Não Existe',404);
      }
      

 
    return index_Prod;
}


  }


export default LoadPorUsersServices;
