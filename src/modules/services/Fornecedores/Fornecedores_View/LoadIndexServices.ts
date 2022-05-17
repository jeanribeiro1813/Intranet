import { getCustomRepository, getRepository } from "typeorm";
import FornecedoresRepository from '../../../../shared/infra/typeorm/repositories/FornecedoresRepository'
import Fornecedores from '../../../../shared/infra/typeorm/entities/Fornecedores'
import AppError from "../../../../shared/errors/AppErrors";
import {injectable, inject} from 'tsyringe'



interface IRequestDTO {
  uuidusuario:string;
}

@injectable()
class LoadIndexServices {

    constructor(
        @inject('FornecedoresRepository')
        private fornecedoresRepository: FornecedoresRepository){
        
      }

  public async index ({uuidusuario}: IRequestDTO): Promise<Fornecedores | undefined> {

      const result = await this.fornecedoresRepository.findById(uuidusuario);

      if(!result){
        throw new AppError ('Não Existe',404);
      }

      return result;
  }
}

export default LoadIndexServices;
