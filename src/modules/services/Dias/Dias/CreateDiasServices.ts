import { getCustomRepository } from 'typeorm'
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
class CreateDiasService {

  constructor(
    @inject('DiasRepository')
    private diasRepository: DiasRepository){
    
  }

    public async create({ uuiddiasuteis,ano,mes,codigo,dias}: IRequestDTO): Promise< Dias | AppError> {

      const redisCache = new RedisCache();

      const result = await this.diasRepository.findById(uuiddiasuteis);

      if (result) {
        throw new AppError('Não existe.',404);

      }

      const dia =  this.diasRepository.create({

        uuiddiasuteis,ano,mes,codigo,dias

      });


      await redisCache.invalidation('API_REDIS_DIAS');

      return dia;
    }
  }

  export default CreateDiasService;
