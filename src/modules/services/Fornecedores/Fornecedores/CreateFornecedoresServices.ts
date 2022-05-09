import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Fornecedores from '../../../../shared/infra/typeorm/entities/Fornecedores';
import FornecedoresRepository from '../../../../shared/infra/typeorm/repositories/FornecedoresRepository'




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

  class CreateFornecedoresService {


    public async create({ uuidusuario,usuario,tp_doc,cpf_cnpj,email,contato,contato2,cargo,status,avatar}: IRequestDTO): Promise<Fornecedores | AppError> {

      const Repository = getCustomRepository(FornecedoresRepository);

      const result = await Repository.findById(uuidusuario);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const fornecedor =  Repository.create({

        uuidusuario,usuario,tp_doc,cpf_cnpj,email,contato,contato2,cargo,status,avatar

      });

      await Repository.save(fornecedor);

      return fornecedor;
    }
  }

  export default CreateFornecedoresService;
