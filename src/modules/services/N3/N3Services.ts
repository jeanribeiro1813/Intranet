import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Entitie from '../../../shared/infra/typeorm/entities/N3';
import Repository from '../../../shared/infra/typeorm/repositories/N3Repository'
import RedisCache from '../../../shared/cache/RedisCache';



interface IRequestDTO {
  uuidn3: string;
  codigo:string;
  descricao: string;
}

interface IRequestDelete {
  uuidn3: string;
 
}



  class CreateServices {

    public async create({uuidn3, codigo, descricao}: IRequestDTO): Promise<Entitie | Error> {

      const repository = getCustomRepository(Repository);

      const redisCache = new RedisCache();

      const checkUserExists = await repository.findById(codigo);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const result =  repository.create({

        uuidn3, codigo, descricao

      });

      await redisCache.invalidation('API_REDIS_N3');
  
      await repository.save(result);

      return result;
    }

    public async read (): Promise<Entitie[] | AppError> {

      const repository = getCustomRepository(Repository);

      const redisCache = new RedisCache();

      let responseDTO = await redisCache.recover<Entitie[]>('API_REDIS_N3')


      if(!responseDTO){

          responseDTO  = await repository.find();
          
          //Criando um save Redis

          await redisCache.save('API_REDIS_N3',responseDTO)
      }
      
      
      return responseDTO;
    }

    public async update({uuidn3, codigo, descricao}: IRequestDTO): Promise<Entitie | Error> {

      const repository = getCustomRepository(Repository);

      const redisCache = new RedisCache();


      const result = await repository.findOne(uuidn3);

      if (!result) {
        throw new AppError ('Dados não existe',404);
      }

      await redisCache.invalidation('API_REDIS_N3');


      result.codigo = codigo ? codigo : result.codigo;
      result.descricao = descricao ? descricao : result.descricao;
  

      await repository.save(result);

      return result;

    }

    public async delete( {uuidn3}: IRequestDelete) : Promise<void> {

      const repository = getCustomRepository(Repository);

      const redisCache = new RedisCache();

      const result = await repository.findOne(uuidn3);

      if (!result) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_N3');

      await repository.remove(result);
    }


  }

  export default CreateServices;
