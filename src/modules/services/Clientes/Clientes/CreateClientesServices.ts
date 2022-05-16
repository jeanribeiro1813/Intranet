import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Clientes from '../../../../shared/infra/typeorm/entities/Clientes';
import ClientesRepository from '../../../../shared/infra/typeorm/repositories/ClientesRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'



interface IRequestDTO {
  uuidcliente: string;
  projeto:string;
  cliente:string;


  }

  @injectable()
  class CreateClientesService {

    constructor(
      @inject('ClientesRepository')
      private clientesRepository: ClientesRepository){
      
    }

    public async create({ uuidcliente,projeto, cliente}: IRequestDTO): Promise<Clientes | Error> {


      const redisCache = new RedisCache();

      const result = await this.clientesRepository.findById(uuidcliente);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  this.clientesRepository.create({

        uuidcliente,projeto, cliente


      });

      await redisCache.invalidation('API_REDIS_CLIENTES');


      return cliet;
    }
  }

  export default CreateClientesService;
