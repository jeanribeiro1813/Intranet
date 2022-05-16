import { getCustomRepository,getRepository } from 'typeorm'
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
class UpdateClientService {

  constructor(
    @inject('ClientesRepository')
    private clientesRepository: ClientesRepository){
    
  }



    public async update({uuidcliente,projeto, cliente}: IRequestDTO): Promise<Clientes | Error> {


      const redisCache = new RedisCache();

      const result = await this.clientesRepository.findById(uuidcliente);

      if (!result) {
        throw new AppError ('client não existe',404);
      }

      await redisCache.invalidation('API_REDIS_CLIENTES');
      
      result.projeto = projeto ? projeto : result.projeto;
      result.cliente = cliente ? cliente : result.cliente;

      await this.clientesRepository.save(result);

      return result;
    }
  }

  export default UpdateClientService;
