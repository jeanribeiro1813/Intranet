import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Entitie from '../../../shared/infra/typeorm/entities/FormPag';
import Repository from '../../../shared/infra/typeorm/repositories/FormPagRepository';
import RedisCache from '../../../shared/cache/RedisCache';


interface IDescItemOfSummary {
  uuidformpag: string;
  codigo:string;
  descricao: string;
}

interface IRequestDTO {
  uuidformpag: string;
  codigo: string;
  descricao: string;
}

interface IRequestDelete {
  uuidformpag: string;
}

interface IResponseDTO {
  summary: IDescItemOfSummary[];
}

  class CreateServices {

    public async create({uuidformpag, codigo, descricao}: IRequestDTO): Promise<Entitie | Error> {

      const repository = getCustomRepository(Repository);

      const redisCache = new RedisCache();

      const checkUserExists = await repository.findById(uuidformpag);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const result =  repository.create({

        uuidformpag, codigo, descricao

      });


      await redisCache.invalidation('API_REDIS_FORMPAG');

      await repository.save(result);

      return result;
    }

    public async summary (): Promise<Entitie[] | AppError> {

      const repository = getCustomRepository(Repository);

      const redisCache = new RedisCache();
      
      let responseDTO = await redisCache.recover<Entitie[]>('API_REDIS_FORMPAG')


      if(!responseDTO){

          responseDTO  = await repository.find();
          
          //Criando um save Redis

          await redisCache.save('API_REDIS_FORMPAG',responseDTO)
      }
      
      
      return responseDTO;
  
    }


    public async update({uuidformpag, codigo, descricao}: IRequestDTO): Promise<Entitie | Error> {

      const repository = getCustomRepository(Repository);

      const redisCache = new RedisCache();

      const result = await repository.findOne(uuidformpag);

      if (!result) {
        throw new AppError ('Dados não existe',404);
      }

      await redisCache.invalidation('API_REDIS_FORMPAG');


      result.codigo = codigo ? codigo : result.codigo;
      result.descricao = descricao ? descricao : result.descricao;
  

      await repository.save(result);

      return result;

    }

    public async delete( {uuidformpag}: IRequestDelete) : Promise<void> {

      const repository = getCustomRepository(Repository);

      const redisCache = new RedisCache();

      const result = await repository.findOne({uuidformpag});

      if (!result) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_FORMPAG');

      await repository.remove(result);
    }


  }

  export default CreateServices;
