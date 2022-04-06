import { getCustomRepository, getRepository } from "typeorm";
import FaturamentoViewsRepository from '../../../../modules/typeorm/repositories/FaturamentoViewsRepository';
import FaturamentoView from '../../../../modules/typeorm/entities/FaturamentoView'
import AppError from "../../../../shared/errors/AppErrors";





interface IRequestDTO {
  usuario:string;
  data:string
  summary: [] | any
}





class LoadPorUsersServices{
  public async execute ({usuario ,data}: IRequestDTO): Promise<FaturamentoView[] | AppError> {

      const projetosRepository = getCustomRepository(FaturamentoViewsRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const index_Prod = await projetosRepository.createQueryBuilder().select()
      .where("usuario ILIKE :usuario and cast(split_part(cast(data as text), '-' ,2) as text) ILIKE :data ", 

      {usuario: `%${usuario}%`,data:`%${data}%`}).getMany();

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

    const responseDTO = {
        summary,
    };

    return responseDTO.summary;
}
  }


export default LoadPorUsersServices;
