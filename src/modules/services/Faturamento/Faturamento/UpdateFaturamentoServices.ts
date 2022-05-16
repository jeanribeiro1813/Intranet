import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import FaturamentoRepository from '../../../../shared/infra/typeorm/repositories/FaturamentoRepository'
import Faturamento from '../../../../shared/infra/typeorm/entities/Faturamento'
import RedisCache from '../../../../shared/cache/RedisCache';


interface IRequestDTO {

  uuidfat:string,
  uuidusuario:string;
  uuidprojeto:string;
  uuidatividade:string;
  data:string;
  inicio:string;
  fim:string;
  status:string;
  obs:string;
  empresa:string;

  }

  class CreatefaturaService {

    public async update({uuidfat,uuidusuario, uuidprojeto, uuidatividade,data,inicio,fim,status,obs,empresa}: IRequestDTO): Promise<Faturamento | Error> {

      const Repository = getRepository(Faturamento);

      const redisCache = new RedisCache();

      const result = await Repository.findOne(uuidfat);

      if (!result) {
        throw new AppError ('fatura não existe',404);
      }

      await redisCache.invalidation('API_REDIS_FAT');


      result.uuidfat = uuidfat ? uuidfat : result.uuidfat;
      result.uuidusuario = uuidusuario ? uuidusuario : result.uuidusuario;
      result.uuidprojeto = uuidprojeto ? uuidprojeto : result.uuidprojeto;
      result.uuidatividade = uuidatividade ? uuidatividade : result.uuidatividade;
      result.data = data ? data : result.data;
      result.inicio = inicio ? inicio : result.inicio;
      result.fim = fim ? fim : result.fim;
      result.status = status ? status: result.status;
      result.obs = obs ? obs: result.obs;
      result.empresa = empresa ? empresa: result.empresa;

      await Repository.save(result);

      return result;
    }
  }

  export default CreatefaturaService;
