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
  class CreateClientesService {

    constructor(
      @inject('ContratoRepository')
      private contratoRepository: ContratoRepository){
      
    }


    public async create({ uuidcontrato,contrato}: IRequestDTO): Promise<Contrato | Error> {

      const redisCache = new RedisCache();

      const result = await this.contratoRepository.findById(uuidcontrato);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  this.contratoRepository.create({

        uuidcontrato,contrato

      });

      await redisCache.invalidation('API_REDIS_CONTRATO');


      return cliet;
    }
  }

  export default CreateClientesService;
