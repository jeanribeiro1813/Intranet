import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Faturamento from '../../../../shared/infra/typeorm/entities/Faturamento';
import FaturamentoRepository from '../../../../shared/infra/typeorm/repositories/FaturamentoRepository'
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

  class CreateFatService {

    public async create({ uuidfat,uuidusuario, uuidprojeto,uuidatividade,data,inicio,fim,status,obs,empresa}: IRequestDTO): Promise<Faturamento | Error> {

      const Repository = getCustomRepository(FaturamentoRepository);


      const redisCache = new RedisCache();

      const faturamento = await Repository.findByCode(uuidfat);

      if (faturamento) {
        throw new AppError('Nome já existe.',404);

      }

      const fat =  Repository.create({
        
        uuidfat,uuidusuario, uuidprojeto, uuidatividade,data,inicio,fim,status,obs,empresa

      });

      await redisCache.invalidation('API_REDIS_FAT');

      await Repository.save(fat);

      return fat;
    }
  }

  export default CreateFatService;
