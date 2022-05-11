import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Entitie from '../../../shared/infra/typeorm/entities/N1';
import Repository from '../../../shared/infra/typeorm/repositories/N1Repository'
import RedisCache from '../../../shared/cache/RedisCache';


interface IRequestDTO {
  uuidn1: string;
  codigo: string;
  descricao: string;
}
interface IRequestDelete {
  uuidn1: string;
}


  class CreateServices {

    public async create({uuidn1, codigo, descricao}: IRequestDTO): Promise<Entitie | Error> {

      const repository = getCustomRepository(Repository);

      const redisCache = new RedisCache();

      const checkUserExists = await repository.findById(uuidn1);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const result =  repository.create({

        uuidn1, codigo, descricao

      });

      await redisCache.invalidation('API_REDIS_N1');

      await repository.save(result);

      return result;
    }

    public async read (): Promise<Entitie[] | AppError> {

      const repository = getCustomRepository(Repository);

      const redisCache = new RedisCache();

      let responseDTO = await redisCache.recover<Entitie[]>('API_REDIS_N1')


      if(!responseDTO){

          responseDTO  = await repository.find();
          
          //Criando um save Redis

          await redisCache.save('API_REDIS_N1',responseDTO)
      }
      
      
      return responseDTO;
  

    }

    public async update({uuidn1, codigo, descricao}: IRequestDTO): Promise<Entitie | Error> {

      const repository = getCustomRepository(Repository);

      const redisCache = new RedisCache();

      const result = await repository.findOne(uuidn1);

      if (!result) {
        throw new AppError ('Dados não existe',404);
      }

      await redisCache.invalidation('API_REDIS_N1');


      result.codigo = codigo ? codigo : result.codigo;
      result.descricao = descricao ? descricao : result.descricao;
  

      await repository.save(result);

      return result;

    }

    public async delete( {uuidn1}: IRequestDelete) : Promise<void> {

      const repository = getCustomRepository(Repository);

      const redisCache = new RedisCache();

      const result = await repository.findOne(uuidn1);

      if (!result) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_N1');

      await repository.remove(result);
    }


  }

  export default CreateServices;
