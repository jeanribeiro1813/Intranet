import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Fornecedores from '../../typeorm/entities/Fornecedores';
import FornecedoresRepository from '../../typeorm/repositories/FornecedoresRepository'



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

  class UpdateFornecedoresService {

    public async update({uuidusuario,usuario,tp_doc,cpf_cnpj,email,contato,contato2,cargo,status,avatar}: IRequestDTO): Promise<Fornecedores | Error> {

      const fornecedoresRepository = getCustomRepository(FornecedoresRepository);

      const fornecedores = await fornecedoresRepository.findOne(uuidusuario);

      if (!fornecedores) {
        throw new AppError ('fornecedores não existe',404);
      }


      fornecedores.usuario = usuario ? usuario : fornecedores.usuario;
      fornecedores.tp_doc = tp_doc ? tp_doc : fornecedores.tp_doc;
      fornecedores.cpf_cnpj = cpf_cnpj ? cpf_cnpj : fornecedores.cpf_cnpj;
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
