import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Entitie from '../../../shared/infra/typeorm/entities/N3';
import Repository from '../../../shared/infra/typeorm/repositories/N3Repository'
import RedisCache from '../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'



interface IRequestDTO {
  uuidn3: string;
  codigo:string;
  descricao: string;
}

interface IRequestDelete {
  uuidn3: string;
 
}

@injectable()
class CreateServices {

    constructor(
        @inject('Repository')
        private N3Repository: Repository){
        
      }

    public async create({uuidn3, codigo, descricao}: IRequestDTO): Promise<Entitie | Error> {

      const redisCache = new RedisCache();

      const checkUserExists = await this.N3Repository.findById(codigo);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const result =  this.N3Repository.create({

        uuidn3, codigo, descricao

      });

      await redisCache.invalidation('API_REDIS_N3');

      return result;
    }

    public async read (): Promise<Entitie[] | AppError> {

      const redisCache = new RedisCache();

      let responseDTO = await redisCache.recover<Entitie[]>('API_REDIS_N3')


      if(!responseDTO){

          responseDTO  = await this.N3Repository.findAll();
          
          //Criando um save Redis

          await redisCache.save('API_REDIS_N3',responseDTO)
      }
      
      
      return responseDTO;
    }

    public async update({uuidn3, codigo, descricao}: IRequestDTO): Promise<Entitie | Error> {

      const redisCache = new RedisCache();


      const result = await this.N3Repository.findById(uuidn3);

      if (!result) {
        throw new AppError ('Dados não existe',404);
      }

      await redisCache.invalidation('API_REDIS_N3');


      result.codigo = codigo ? codigo : result.codigo;
      result.descricao = descricao ? descricao : result.descricao;
  

      await this.N3Repository.save(result);

      return result;

    }

    public async delete( {uuidn3}: IRequestDelete) : Promise<void> {

      const redisCache = new RedisCache();

      const result = await this.N3Repository.findById(uuidn3);

      if (!result) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_N3');

      await this.N3Repository.remove(result);
    }


  }

  export default CreateServices;
