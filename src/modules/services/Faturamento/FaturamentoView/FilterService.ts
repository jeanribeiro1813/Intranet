import { getCustomRepository, getRepository } from "typeorm";
import FaturamentoViewsRepository from '../../../typeorm/repositories/FaturamentoViewsRepository';
import FaturamentoView from '../../../typeorm/entities/FaturamentoView'
import AppError from "../../../../shared/errors/AppErrors";



interface IResponseDTO {
  summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {
  uuidusuario:string;
  data:string

}





class LoadPorUsersServices{
  public async filter ({uuidusuario ,data}: IDescItemOfSummary): Promise<IResponseDTO[]> {

      const projetosRepository = getCustomRepository(FaturamentoViewsRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const index_Prod = await projetosRepository.createQueryBuilder().select()
      .where(`uuidusuario :: text  ILIKE :uuidusuario and substring(data::text,1,7) ILIKE :data `, 

      {uuidusuario: `%${uuidusuario}%`,data:`%${data}%`}).getMany();

      console.log(index_Prod)

      if(!index_Prod){
        throw new AppError ('Não Existe',40);
      }
      
      const summary = index_Prod.map((use) =>{

        const DescItemOfSummary = {

            uuidfat: use?.uuidfat,
            cliente: use?.cliente,
            departamento: use?.departamento,
            nprojeto: use?.nprojeto,
            projeto: use?.projeto,
            contrato :use?.contrato,
            atividade: use?.atividade,
            data: use?.data,
            inicio: use?.inicio,
            fim: use?.fim,
            obs: use?.obs,
            status:use?.status



        }

        return DescItemOfSummary;
        
        }


    )

    const result : any = {
        summary
    };

    return result.summary;
}
  }


export default LoadPorUsersServices;
