import { getCustomRepository, getRepository } from "typeorm";
import FaturamentoRepository from '../../../../modules/typeorm/repositories/FaturamentoRepository';
import Faturamento from '../../../../modules/typeorm/entities/Faturamento';
import AppError from "../../../../shared/errors/AppErrors";
import CreatefaturaService from "./UpdateFaturamentoServices";




interface IRequestDTO {
   
  uuidfat:string,
  uuidusuario:string;
  uuidprojeto:string;
  uuidcontrato:string;
  uuidatividade:string;
  data:string;
  inicio:string;
  fim:string;
  status:string;
  obs:string;
  empresa:string;
  uuidcliente:string

}





class LoadPorUsersServices{
  public async executeStatus ({uuidusuario, uuidprojeto,uuidcontrato,data,status}: IRequestDTO): Promise<Faturamento[]| Error> {

      const projetosRepository = getCustomRepository(FaturamentoRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const faturaUpdate = await projetosRepository.createQueryBuilder().select()
      .where("uuidusuario ILIKE :uuidusuario and\
      uuidprojeto ILIKE :uuidprojeto  and\
      uuidcontrato ILIKE :uuidcontrato and\
        cast(split_part(cast(data as text), '-' ,2) as text) ILIKE :data\ ", 
      {uuidusuario:`%${uuidusuario}%`
      ,uuidprojeto:`%${uuidprojeto}%`
      ,uuidcontrato:`%${uuidcontrato}%`
      ,data:`%${data}%`}).getMany();

      if(!faturaUpdate){
        throw new AppError ('Não Existe',401);
      }


      const createfaturaService = new CreatefaturaService();

      faturaUpdate.forEach(async function(dados){
        dados.status = status;
        await createfaturaService.update(dados);
      });


      return faturaUpdate;

    
  }
}

export default LoadPorUsersServices;
