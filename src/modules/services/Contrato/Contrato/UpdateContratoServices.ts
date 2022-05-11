import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Contrato from '../../../../shared/infra/typeorm/entities/Contrato';
import ContratoRepository from '../../../../shared/infra/typeorm/repositories/ContratoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';



interface IRequestDTO {

  uuidcontrato: string;
  contrato:string;


  }

  class UpdateClientService {

    public async update({uuidcontrato,contrato}: IRequestDTO): Promise<Contrato | Error> {

      const Repository = getCustomRepository(ContratoRepository);

      const redisCache = new RedisCache();

      const result = await Repository.findOne(uuidcontrato);

      if (!result) {
        throw new AppError ('client não existe',404);
      }
      
      await redisCache.invalidation('API_REDIS_CONTRATO');

      result.contrato = contrato ? contrato : result.contrato;

  

      await Repository.save(result);

      return result;
    }
  }

  export default UpdateClientService;
