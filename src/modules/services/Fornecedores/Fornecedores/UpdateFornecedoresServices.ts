import { getCustomRepository,getRepository } from 'typeorm'
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
class UpdateFornecedoresService {

    constructor(
        @inject('FornecedoresRepository')
        private fornecedoresRepository: FornecedoresRepository){
        
      }
      
    public async update({uuidusuario,usuario,tp_doc,cpf_cnpj,email,contato,contato2,cargo,status,avatar}: IRequestDTO): Promise<Fornecedores | Error> {

      const redisCache = new RedisCache();

      const result = await this.fornecedoresRepository.findById(uuidusuario);

      if (!result) {
        throw new AppError ('fornecedores não existe',404);
      }

      await redisCache.invalidation('API_REDIS_FORNECEDORES');

      result.usuario = usuario ? usuario : result.usuario;
      result.tp_doc = tp_doc ? tp_doc : result.tp_doc;
      result.cpf_cnpj = cpf_cnpj ? cpf_cnpj : result.cpf_cnpj;
      result.email = email ? email : result.email;
      result.contato = contato ? contato : result.contato;
      result.contato2 = contato2 ? contato2 : result.contato2;
      result.cargo = cargo ? cargo : result.cargo;
      result.status= status ? status : result.status;
      result.avatar= avatar ? avatar : result.avatar;


      await this.fornecedoresRepository.save(result);

      return result;
    }
  }

  export default UpdateFornecedoresService;
