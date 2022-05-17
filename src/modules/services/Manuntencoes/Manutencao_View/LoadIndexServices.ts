import { getCustomRepository, getRepository } from "typeorm";
import Manutencoes from '../../../../shared/infra/typeorm/entities/Manutencoes';
import ManuntencoesRepository from '../../../../shared/infra/typeorm/repositories/ManuntencoesRepository'
import AppError from "../../../../shared/errors/AppErrors";
import {injectable, inject} from 'tsyringe'


interface IRequestDTO {
  cod_func_uuid:string;
}


@injectable()
class LoadIndexServices {

    constructor(
        @inject('ManuntencoesRepository')
        private manutencaoresRepository: ManuntencoesRepository){
        
      }

  public async index ({cod_func_uuid}: IRequestDTO): Promise<Manutencoes | undefined> {

      const result = await this.manutencaoresRepository.findById(cod_func_uuid);

      if(!result){
        throw new AppError ('Não Existe',404);
      }

      return result;
  }
}

export default LoadIndexServices;
