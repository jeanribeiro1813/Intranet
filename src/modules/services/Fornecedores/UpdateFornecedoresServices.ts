import { getCustomRepository,getRepository } from 'typeorm'
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

  class UpdateFornecedoresService {

    public async update({uuidfornece,nome,tp_doc,doc,email,contato,contato2,cargo,status,avatar}: IRequestDTO): Promise<Fornecedores | Error> {

      const fornecedoresRepository = getCustomRepository(FornecedoresRepository);

      const fornecedores = await fornecedoresRepository.findOne(uuidfornece);

      if (!fornecedores) {
        throw new AppError ('fornecedores não existe',404);
      }


      fornecedores.nome = nome ? nome : fornecedores.nome;
      fornecedores.tp_doc = tp_doc ? tp_doc : fornecedores.tp_doc;
      fornecedores.doc = doc ? doc : fornecedores.doc;
      fornecedores.email = email ? email : fornecedores.email;
      fornecedores.contato = contato ? contato : fornecedores.contato;
      fornecedores.contato2 = contato2 ? contato2 : fornecedores.contato2;
      fornecedores.cargo = cargo ? cargo : fornecedores.cargo;
      fornecedores.status= status ? status : fornecedores.status;
      fornecedores.avatar= avatar ? avatar : fornecedores.avatar;


      await fornecedoresRepository.save(fornecedores);

      return fornecedores;
    }
  }

  export default UpdateFornecedoresService;
