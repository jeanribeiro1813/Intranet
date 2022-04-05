import { getCustomRepository, getRepository } from "typeorm";
import FaturamentoRepository from '../../../../modules/typeorm/repositories/FaturamentoRepository';
import Faturamento from '../../../../modules/typeorm/entities/Faturamento';
import AppError from "../../../../shared/errors/AppErrors";
import CreatefaturaService from "./UpdateFaturamentoServices";




interface IRequestDTO {
   
  codfat:string;
  codusuario:string;
  coddeparta:string;
  codprojeto:string;
  codativida:string;
  contrato: string;
  data: string;
  inicio: string;
  fim: string;
  status: string;
  obs: string;

}





class LoadPorUsersServices{
  public async executeStatus ({codfat,codusuario,coddeparta,codprojeto,codativida,contrato,data,inicio,fim,status,obs}: IRequestDTO): Promise<Faturamento[]| Error> {

      const projetosRepository = getCustomRepository(FaturamentoRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const faturaUpdate = await projetosRepository.createQueryBuilder().select()
      .where("codusuario ILIKE :codusuario and\
        coddeparta ILIKE :coddeparta and\
        codprojeto ILIKE :codprojeto  and\
        contrato ILIKE :contrato and\
        cast(split_part(cast(data as text), '-' ,2) as text) ILIKE :data\ ", 
      {codusuario:`%${codusuario}%`
      ,coddeparta: `%${coddeparta}`
      ,codprojeto:`%${codprojeto}%`
      ,contrato:`%${contrato}%`
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
