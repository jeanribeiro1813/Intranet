import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Contrato from '../../../../shared/infra/typeorm/entities/Contrato';
import ContratoRepository from '../../../../shared/infra/typeorm/repositories/ContratoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'



interface IRequestDTO {

  uuidcontrato: string;
  contrato:string;


  }


  
@injectable()
class UpdateClientService {

  constructor(
    @inject('ContratoRepository')
    private contratoRepository: ContratoRepository){
    
  }


    public async update({uuidcontrato,contrato}: IRequestDTO): Promise<Contrato | Error> {

      const redisCache = new RedisCache();

      const result = await this.contratoRepository.findById(uuidcontrato);

      if (!result) {
        throw new AppError ('client não existe',404);
      }
      
      await redisCache.invalidation('API_REDIS_CONTRATO');

      result.contrato = contrato ? contrato : result.contrato;

  

      await this.contratoRepository.save(result);

      return result;
    }
  }

  export default UpdateClientService;
