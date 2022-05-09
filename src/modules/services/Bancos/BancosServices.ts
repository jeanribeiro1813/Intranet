import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Entitie from '../../../shared/infra/typeorm/entities/Bancos';
import Repository from '../../../shared/infra/typeorm/repositories/BancosRepository'
import RedisCache from '../../../shared/cache/RedisCache';


interface IRequestDTO {
  uuidbanco: string;
  codigo: string;
  descricao: string;
}

interface IRequestDelete {
  uuidbanco: string;
}


  class CreateServices {

    public async create({uuidbanco, codigo, descricao}: IRequestDTO): Promise<Entitie | Error> {

      const repository = getCustomRepository(Repository);

      const redisCache = new RedisCache();


      const checkUserExists = await repository.findById(uuidbanco);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const result =  repository.create({

        uuidbanco, codigo, descricao

      });

      await redisCache.invalidation('API_REDIS_SUMMARY');

      await repository.save(result);

      return result;
    }

    public async read (): Promise<Entitie[] | AppError> {

      const repository = getCustomRepository(Repository);

      const redisCache = new RedisCache();

      let responseDTO = await redisCache.recover<Entitie[]>('API_REDIS_SUMMARY')


      if(!responseDTO){

          responseDTO  = await repository.find();
          
          //Criando um save Redis

          await redisCache.save('API_REDIS_SUMMARY',responseDTO)
      }
      
      
      return responseDTO;
  
    }


    public async update({uuidbanco, codigo, descricao}: IRequestDTO): Promise<Entitie | Error> {

      const repository = getCustomRepository(Repository);
      

      const redisCache = new RedisCache();


      const result = await repository.findOne(uuidbanco);

      if (!result) {
        throw new AppError ('Dados não existe',404);
      }

      await redisCache.invalidation('API_REDIS_SUMMARY');

      result.codigo = codigo ? codigo : result.codigo;
      result.descricao = descricao ? descricao : result.descricao;
  

      await repository.save(result);

      return result;

    }

    public async delete( {uuidbanco}: IRequestDelete) : Promise<void> {

      const repository = getCustomRepository(Repository);

      const redisCache = new RedisCache();


      const result = await repository.findOne(uuidbanco);

      if (!result) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_SUMMARY');
      
      await repository.remove(result);
    }


  }

  export default CreateServices;
