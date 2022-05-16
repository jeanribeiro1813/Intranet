import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Carros from '../../../../shared/infra/typeorm/entities/Carros';
import CarrosRepository from '../../../../shared/infra/typeorm/repositories/CarrosRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'



interface IRequestDTO {
  id_uuid: string;
  placa:string;
  carro:string;
  ano: number;
  cor:string;
  km:string;
  ativo: number;
  garagem:string;
  id:number;
  }

  @injectable()
  class CreateCargoService {

    constructor(
      @inject('CarrosRepository')
      private carrosRepository: CarrosRepository){
      
    }

    public async create({ id_uuid,placa, carro,ano,cor, km,ativo,garagem,id}: IRequestDTO): Promise<Carros | Error> {

      const redisCache = new RedisCache();


      const result = await this.carrosRepository.findById(id_uuid);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const carros =  this.carrosRepository.create({id_uuid,
        placa, carro,ano,cor, km,ativo,garagem,id


      });

      await redisCache.invalidation('API_REDIS_CARROS');


      return carros;
    }
  }

  export default CreateCargoService;
