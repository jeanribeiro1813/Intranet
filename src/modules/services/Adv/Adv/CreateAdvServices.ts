import AppError from '../../../../shared/errors/AppErrors';
import Adv from '../../../../shared/infra/typeorm/entities/Adv';
import AdvRepository from '../../../../shared/infra/typeorm/repositories/AdvRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'




interface IRequestDTO {
  codadv: string;
  cod_page:number;
  desc_adv: string;
  cod_adv: string;

  }

  @injectable()
  class CreateClientesService {

    constructor(
      @inject('AdvRepository')
      private advRepository: AdvRepository){
      
    }

    public async create({ codadv,cod_page,desc_adv,cod_adv}: IRequestDTO): Promise<Adv | AppError> {



      const redisCache = new RedisCache();

      const checkUserExists = await this.advRepository.findById(codadv);

      if (!checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  this.advRepository.create({

        cod_page,desc_adv,cod_adv

      });

      await redisCache.invalidation('API_REDIS_ADv');

      return cliet;
    }
  }

  export default CreateClientesService;
