import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Entitie from '../../../shared/infra/typeorm/entities/Bancos';
import Repository from '../../../shared/infra/typeorm/repositories/BancosRepository'
import RedisCache from '../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'

interface IRequestDTO {
  uuidbanco: string;
  codigo: string;
  descricao: string;
}

interface IRequestDelete {
  uuidbanco: string;
}

@injectable()
class CreateServices {

    constructor(
        @inject('Repository')
        private bancoRepository: Repository){
        
      }


    public async create({uuidbanco, codigo, descricao}: IRequestDTO): Promise<Entitie | Error> {

      const redisCache = new RedisCache();


      const checkUserExists = await this.bancoRepository.findById(uuidbanco);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const result =  this.bancoRepository.create({

        uuidbanco, codigo, descricao

      });

      await redisCache.invalidation('API_REDIS_BANCO');

  
      return result;
    }

    public async read (): Promise<Entitie[] | AppError> {


      const redisCache = new RedisCache();

      let responseDTO = await redisCache.recover<Entitie[]>('API_REDIS_BANCO')


      if(!responseDTO){

          responseDTO  = await this.bancoRepository.findAll();
          
          //Criando um save Redis

          await redisCache.save('API_REDIS_BANCO',responseDTO)
      }
      
      
      return responseDTO;
  
    }


    public async update({uuidbanco, codigo, descricao}: IRequestDTO): Promise<Entitie | Error> {

      const redisCache = new RedisCache();


      const result = await this.bancoRepository.findById(uuidbanco);

      if (!result) {
        throw new AppError ('Dados não existe',404);
      }

      await redisCache.invalidation('API_REDIS_BANCO');

      result.codigo = codigo ? codigo : result.codigo;
      result.descricao = descricao ? descricao : result.descricao;
  

      await this.bancoRepository.save(result);

      return result;

    }

    public async delete( {uuidbanco}: IRequestDelete) : Promise<void> {


      const redisCache = new RedisCache();


      const result = await this.bancoRepository.findById(uuidbanco);

      if (!result) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_BANCO');
      
      await this.bancoRepository.remove(result);
    }


  }

  export default CreateServices;
