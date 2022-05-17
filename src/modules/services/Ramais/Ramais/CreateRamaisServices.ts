import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Ramais from '../../../../shared/infra/typeorm/entities/Ramais';
import RamaisRepository from '../../../../shared/infra/typeorm/repositories/RamaisRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'



interface IRequestDTO {
  uuidramal: string;
  ramal:number;
  cod_atv:string;


  }

  @injectable()
class CreateRamaisService {

    constructor(
        @inject('RamaisRepository')
        private ramaisRepository: RamaisRepository){
        
      }

    public async create({ uuidramal,ramal,cod_atv}: IRequestDTO): Promise<Ramais | Error> {

      const redisCache = new RedisCache();

      const result = await this.ramaisRepository.findById(uuidramal);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  this.ramaisRepository.create({

        uuidramal,ramal,cod_atv

      });

      await redisCache.invalidation('API_REDIS_RAMAIS');

      return cliet;
    }
  }

  export default CreateRamaisService;
