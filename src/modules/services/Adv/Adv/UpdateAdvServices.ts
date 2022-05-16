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
  class UpdateClientService {
  
    constructor(
      @inject('AdvRepository')
      private advRepository: AdvRepository){
      
    }


    public async update({codadv,cod_page,desc_adv,cod_adv}: IRequestDTO): Promise<Adv | Error> {

      const redisCache = new RedisCache();

      const result = await this.advRepository.findById(codadv);

      if (!result) {
        throw new AppError ('client não existe',404);
      }


      await redisCache.invalidation('API_REDIS_ADv');

      result.cod_page = cod_page ? cod_page : result.cod_page;
      result.desc_adv = desc_adv ? desc_adv : result.desc_adv;
      result.cod_adv = cod_adv ? cod_adv : result.cod_adv;
  

      await this.advRepository.save(result);

      return result;
    }
  }

  export default UpdateClientService;
