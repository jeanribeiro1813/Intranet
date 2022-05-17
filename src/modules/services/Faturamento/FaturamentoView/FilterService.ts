import { getCustomRepository, getRepository } from "typeorm";
import FaturamentoViewsRepository from '../../../../shared/infra/typeorm/repositories/FaturamentoViewsRepository';
import FaturamentoView from '../../../../shared/infra/typeorm/entities/FaturamentoView'
import AppError from "../../../../shared/errors/AppErrors";



interface IResponseDTO {
  uuidusuario:string;
  data:string

}





class LoadPorUsersServices{
  public async filter ({uuidusuario ,data}: IResponseDTO): Promise<FaturamentoView[]> {

      const projetosRepository = getRepository(FaturamentoView);

      //Criando um Select personalizado como filtrando 2 colunas
      const index_Prod = await projetosRepository.createQueryBuilder().select()
      .where(`uuidusuario :: text  ILIKE :uuidusuario and substring(data::text,1,7) ILIKE :data `, 

      {uuidusuario: `%${uuidusuario}%`,data:`%${data}%`}).getMany();


      if(!index_Prod){
        throw new AppError ('Não Existe',40);
      }
      

 
    return index_Prod;
}


  }


export default LoadPorUsersServices;
