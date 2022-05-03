import { getCustomRepository, getRepository } from "typeorm";
import FaturamentoRepository from '../../../../modules/typeorm/repositories/FaturamentoRepository';
import Faturamento from '../../../../modules/typeorm/entities/Faturamento';
import AppError from "../../../../shared/errors/AppErrors";
import CreatefaturaService from "./UpdateFaturamentoServices";


interface IRequestDTO {
   
  uuidusuario:string;
  uuidprojeto:string;
  data:string;
  status:string;

}


class UpdateFaturamentoServices{

  public async updateStatus ({uuidusuario, uuidprojeto, data, status}: IRequestDTO): Promise<Faturamento[]| Error> {

      const Repository = getCustomRepository(FaturamentoRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const result = await Repository.createQueryBuilder().select()
      .where("uuidusuario::text ILIKE :uuidusuario and\
      uuidprojeto::text ILIKE :uuidprojeto  and\
      substring(data::text, 1,7) ILIKE :data\ ", 
      {uuidusuario:`%${uuidusuario}%`
      ,uuidprojeto:`%${uuidprojeto}%`
      ,data:`%${data}%`}).getMany();


      if(!result){
        throw new AppError ('Não Existe',401);
      }


      const createfaturaService = new CreatefaturaService();

      result.forEach(async function(dados){
        dados.status = status;
        await createfaturaService.update(dados);
      });


      return result;

    
  }
}

export default UpdateFaturamentoServices;
