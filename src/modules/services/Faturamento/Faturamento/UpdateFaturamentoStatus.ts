import { getCustomRepository, getRepository } from "typeorm";
import FaturamentoRepository from '../../../../shared/infra/typeorm/repositories/FaturamentoRepository';
import Faturamento from '../../../../shared/infra/typeorm/entities/Faturamento';
import AppError from "../../../../shared/errors/AppErrors";
import CreatefaturaService from "./UpdateFaturamentoServices";
import RedisCache from '../../../../shared/cache/RedisCache';


interface IRequestDTO {
   
  uuidusuario:string;
  uuidprojeto:string;
  data:string;
  sttpguuid:string;

}


class UpdateFaturamentoServices{

  public async updateStatus ({uuidusuario, uuidprojeto, data, sttpguuid}: IRequestDTO): Promise<Faturamento[]| Error> {

      const Repository = getRepository(Faturamento);

      const redisCache = new RedisCache();

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
      
      await redisCache.invalidation('API_REDIS_FAT');
      
      result.forEach(async function(dados){
        dados.sttpguuid = sttpguuid;
        await createfaturaService.update(dados);
      });


      return result;

    
  }
}

export default UpdateFaturamentoServices;
