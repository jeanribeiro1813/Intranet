import { getCustomRepository,getRepository } from 'typeorm'
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
class UpdateCargoService {

  constructor(
    @inject('CargoRepository')
    private cargoeRepository: CargoRepository){
    
  }

    public async update({uuidcargo,cargo, cod_cargo}: IRequestDTO): Promise<Cargo | Error> {

      const redisCache = new RedisCache();

      const result = await this.cargoeRepository.findById(uuidcargo);

      if (!result) {
        throw new AppError ('cargo não existe',404);
      }


      await redisCache.invalidation('API_REDIS_CARGO');

      result.cargo = cargo ? cargo : result.cargo;
      result.cod_cargo = cod_cargo ? cod_cargo: result.cod_cargo



      await this.cargoeRepository.save(result);

      return result;
    }
  }

  export default UpdateCargoService;
