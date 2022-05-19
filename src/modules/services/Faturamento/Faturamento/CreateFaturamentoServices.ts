import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Faturamento from '../../../../shared/infra/typeorm/entities/Faturamento';
import FaturamentoRepository from '../../../../shared/infra/typeorm/repositories/FaturamentoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'




interface IRequestDTO {
  uuidfat:string,
  uuidusuario:string;
  uuidprojeto:string;
  uuidatividade:string;
  data:string;
  inicio:string;
  fim:string;
  sttpguuid:string;
  obs:string;
  empresa:string;

  }


  @injectable()
  class CreateFatService {
  
    constructor(
      @inject('FaturamentoRepository')
      private fatRepository: FaturamentoRepository){
      
    }


    public async create({ uuidfat,uuidusuario, uuidprojeto,uuidatividade,data,inicio,fim,sttpguuid,obs,empresa}: IRequestDTO): Promise<Faturamento | Error> {

      const redisCache = new RedisCache();

      const faturamento = await this.fatRepository.findById(uuidfat);

      if (!faturamento) {

        if (faturamento) {
          throw new AppError('Faturamento já existe.',404);
        }
  
      }

      const fat =  this.fatRepository.create({
        
        uuidfat,uuidusuario, uuidprojeto, uuidatividade,data,inicio,fim,sttpguuid,obs,empresa

      });

      await redisCache.invalidation('API_REDIS_FAT');

      return fat;
    }
  }

  export default CreateFatService;
