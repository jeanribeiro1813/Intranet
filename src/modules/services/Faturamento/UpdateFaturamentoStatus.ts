import { getCustomRepository, getRepository } from "typeorm";
import FaturamentoRepository from '../../../modules/typeorm/repositories/FaturamentoRepository';
import Faturamento from '../../../modules/typeorm/entities/Faturamento';
import AppError from "../../../shared/errors/AppErrors";
import CreatefaturaService from "./UpdateFaturamentoServices";




interface IRequestDTO {
   
   usuario:string;
   departamento:string;
   cod_proj:string;
   contrato:string;
   mes: string;
   status: string;

}





class LoadPorUsersServices{
  public async executeStatus ({usuario,departamento,cod_proj,contrato,mes,status}: IRequestDTO): Promise<Faturamento[]| Error> {

      const projetosRepository = getCustomRepository(FaturamentoRepository);

      //Criando um Select personalizado como filtrando 2 colunas
      const faturaUpdate = await projetosRepository.createQueryBuilder().select()
      .where('usuario ILIKE :usuario and mes ILIKE :mes and departamento ILIKE :departamento and cod_proj ILIKE :cod_proj  and contrato ILIKE :contrato ', 
      {usuario: `%${usuario}%`
      ,mes:`%${mes}%`
      ,departamento:`%${departamento}%`
      ,cod_proj:`%${cod_proj}%`
      ,contrato:`%${contrato}%`}).getMany();

      if(!faturaUpdate){
        throw new AppError ('Não Existe',401);
      }


      const createfaturaService = new CreatefaturaService();

      faturaUpdate.forEach(async function(data){
        data.status = status;
        await createfaturaService.update(data);
      });


      return faturaUpdate;

    
  }
}

export default LoadPorUsersServices;
