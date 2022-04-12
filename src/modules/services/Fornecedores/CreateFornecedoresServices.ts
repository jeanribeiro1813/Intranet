import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Fornecedores from '../../typeorm/entities/Fornecedores';
import FornecedoresRepository from '../../typeorm/repositories/FornecedoresRepository'




interface IRequestDTO {

  uuidfornece: string;
  nome:string;
  tp_doc:string;
  doc: string;
  email:string;
  contato:string;
  contato2: string;
  cargo:string;
  status:string;
  avatar: string;
 

  }

  class CreateFornecedoresService {


    public async execute({ uuidfornece,nome,tp_doc,doc,email,contato,contato2,cargo,status,avatar}: IRequestDTO): Promise<Fornecedores | AppError> {

      const fornecedoresRepository = getCustomRepository(FornecedoresRepository);

      const checkFornecedorExists = await fornecedoresRepository.findById(uuidfornece);

      if (checkFornecedorExists) {
        throw new AppError('Nome já existe.',404);

      }

      const fornecedor =  fornecedoresRepository.create({

        uuidfornece,nome,tp_doc,doc,email,contato,contato2,cargo,status,avatar

      });

      await fornecedoresRepository.save(fornecedor);

      return fornecedor;
    }
  }

  export default CreateFornecedoresService;
