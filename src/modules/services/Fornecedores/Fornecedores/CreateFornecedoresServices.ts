import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Fornecedores from '../../../../shared/infra/typeorm/entities/Fornecedores';
import FornecedoresRepository from '../../../../shared/infra/typeorm/repositories/FornecedoresRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'




interface IRequestDTO {

  uuidusuario: string;
  usuario:string;
  tp_doc:string;
  cpf_cnpj: string;
  email:string;
  contato:string;
  contato2: string;
  cargo:string;
  status:string;
  avatar: string;
 

  }

  @injectable()
class CreateFornecedoresService {

    constructor(
        @inject('FornecedoresRepository')
        private fornecedoresRepository: FornecedoresRepository){
        
      }


    public async create({ uuidusuario,usuario,tp_doc,cpf_cnpj,email,contato,contato2,cargo,status,avatar}: IRequestDTO): Promise<Fornecedores | AppError> {

      const redisCache = new RedisCache();

      const result = await this.fornecedoresRepository.findById(uuidusuario);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const fornecedor =  this.fornecedoresRepository.create({

        uuidusuario,usuario,tp_doc,cpf_cnpj,email,contato,contato2,cargo,status,avatar

      });

      await redisCache.invalidation('API_REDIS_FORNECEDORES');

      return fornecedor;
    }
  }

  export default CreateFornecedoresService;
