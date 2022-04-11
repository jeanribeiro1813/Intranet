import { getCustomRepository, getRepository } from "typeorm";
import FaturamentoRepository from '../../../../modules/typeorm/repositories/FaturamentoRepository';
import Faturamento from '../../../../modules/typeorm/entities/Faturamento';
import AppError from "../../../../shared/errors/AppErrors";
import CreatefaturaService from "./UpdateFaturamentoServices";


interface IRequestDTO {
   
  uuidusuario:string;
  uuidprojeto:string;
  uuidcontrato:string;
  data:string;
  status:string;

}


class UpdateFaturamentoServices{

  public async executeStatus ({uuidusuario, uuidprojeto, uuidcontrato, data, status}: IRequestDTO): Promise<Faturamento[]| Error> {

      const projetosRepository = getCustomRepository(FaturamentoRepository);


      //Criando um Select personalizado como filtrando 2 colunas
      const faturas = await projetosRepository.createQueryBuilder().select()
      .where("uuidusuario::text ILIKE :uuidusuario and\
      uuidprojeto::text ILIKE :uuidprojeto  and\
      uuidcontrato::text ILIKE :uuidcontrato and\
      split_part(data::text, '-' ,2) ILIKE :data\ ", 
      {uuidusuario:`%${uuidusuario}%`
      ,uuidprojeto:`%${uuidprojeto}%`
      ,uuidcontrato:`%${uuidcontrato}%`
      ,data:`%${data}%`}).getMany();

      console.log(faturas);



      if(!faturas){
        throw new AppError ('Não Existe',401);
      }


      const createfaturaService = new CreatefaturaService();

      faturas.forEach(async function(dados){
        dados.status = status;
        await createfaturaService.update(dados);
      });


      return faturas;

    
  }
}

export default UpdateFaturamentoServices;
