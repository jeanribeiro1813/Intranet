import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Dias from '../../../../shared/infra/typeorm/entities/Dias';
import DiasRepository from '../../../../shared/infra/typeorm/repositories/DiasRepository'
import RedisCache from '../../../../shared/cache/RedisCache';


interface IRequestDTO {

  uuiddiasuteis: string;
  ano:string;
  mes: string;
  codigo: string;
  dias: string;

  }

  class UpdatePaginasService {

    public async update({uuiddiasuteis,ano,mes,codigo,dias}: IRequestDTO): Promise<Dias | AppError> {

      const Repository = getCustomRepository(DiasRepository);

      const redisCache = new RedisCache();

      const result = await Repository.findOne(uuiddiasuteis);

      if (!result) {
        throw new AppError ('client não existe',404);
      }

      
      await redisCache.invalidation('API_REDIS_DIAS');

      result.ano = ano ? ano : result.ano;
      result.mes = mes ? mes : result.mes;
      result.codigo = codigo ? codigo : result.codigo;
      result.dias = dias ? dias : result.dias;
  

      await Repository.save(result);

      return result;
    }
  }

  export default UpdatePaginasService;
