import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Cargo from '../../../../shared/infra/typeorm/entities/Cargo';
import CargoRepository from '../../../../shared/infra/typeorm/repositories/CargoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'




interface IRequestDTO {
  uuidcargo: string;
  cargo:string;
  cod_cargo:number;


  }

  @injectable()
  class CreateCargoService {

    constructor(
      @inject('CargoRepository')
      private cargoeRepository: CargoRepository){
      
    }

    public async execute({ uuidcargo,cargo, cod_cargo}: IRequestDTO): Promise<Cargo | Error> {

      const redisCache = new RedisCache();

      const result = await this.cargoeRepository.findById(uuidcargo);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cargoService =  this.cargoeRepository.create({
        uuidcargo, cargo , cod_cargo


      });

      await redisCache.invalidation('API_REDIS_CARGO');

      return cargoService;
    }
  }

  export default CreateCargoService;
