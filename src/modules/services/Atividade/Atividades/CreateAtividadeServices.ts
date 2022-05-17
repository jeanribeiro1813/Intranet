import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Atividades from '../../../../shared/infra/typeorm/entities/Atividades';
import AtividadeRepository from '../../../../shared/infra/typeorm/repositories/AtividadeRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'




interface IRequestDTO {
  uuidatividade: string;
  atividade:string;
  cod_atv:string;


  }

  @injectable()
  class CreateClientesService {

    constructor(
      @inject('AtividadeRepository')
      private atividadeRepository: AtividadeRepository){
      
    }


    public async create({ uuidatividade,atividade,cod_atv}: IRequestDTO): Promise<Atividades | AppError> {


      const redisCache = new RedisCache();

      const result = await this.atividadeRepository.findById(uuidatividade);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const service =  this.atividadeRepository.create({

        uuidatividade,atividade,cod_atv

      });

      await redisCache.invalidation('API_REDIS_ATIVIDADE');


      return service;
    }
  }

  export default CreateClientesService;
