import { getCustomRepository, getRepository } from "typeorm";
import FaturamentoViewsRepository from '../../../../modules/typeorm/repositories/FaturamentoViewsRepository';
import FaturamentoView from '../../../../modules/typeorm/entities/FaturamentoView'
import AppError from "../../../../shared/errors/AppErrors";





interface IRequestDTO {
  nome_usuario:string;
  data:string
}





class LoadPorUsersServices{
  public async execute ({nome_usuario ,data}: IRequestDTO): Promise<FaturamentoView[] | Error> {

      const projetosRepository = getCustomRepository(FaturamentoViewsRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const index_Prod = await projetosRepository.createQueryBuilder().select()
      .where("nome_usuario ILIKE :nome_usuario and cast(split_part(cast(data as text), '-' ,2) as text) ILIKE :data ", 

      {nome_usuario: `%${nome_usuario}%`,data:`%${data}%`}).getMany();

      console.log(index_Prod)

      if(!index_Prod){
        throw new AppError ('Não Existe',40);
      }

      return index_Prod;
  }
}

export default LoadPorUsersServices;
