import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Dias from '../../../../shared/infra/typeorm/entities/Dias';
import DiasRepository from '../../../../shared/infra/typeorm/repositories/DiasRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'

interface IRequestDTO {

  uuiddiasuteis: string;
  ano:string;
  mes: string;
  codigo: string;
  dias: string;

  }


  @injectable()
  class UpdatePaginasService {

  constructor(
    @inject('DiasRepository')
    private diasRepository: DiasRepository){
    
  }

    public async update({uuiddiasuteis,ano,mes,codigo,dias}: IRequestDTO): Promise<Dias | AppError> {

      const redisCache = new RedisCache();

      const result = await this.diasRepository.findById(uuiddiasuteis);

      if (!result) {
        throw new AppError ('client não existe',404);
      }

      
      await redisCache.invalidation('API_REDIS_DIAS');

      result.ano = ano ? ano : result.ano;
      result.mes = mes ? mes : result.mes;
      result.codigo = codigo ? codigo : result.codigo;
      result.dias = dias ? dias : result.dias;
  

      await this.diasRepository.save(result);

      return result;
    }
  }

  export default UpdatePaginasService;
