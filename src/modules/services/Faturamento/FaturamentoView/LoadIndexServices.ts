import { getCustomRepository, getRepository } from "typeorm";
import FaturamentoViewsRepository from '../../../../shared/infra/typeorm/repositories/FaturamentoViewsRepository';
import Faturamento from '../../../../shared/infra/typeorm/entities/FaturamentoView';
import AppError from "../../../../shared/errors/AppErrors";
import {injectable, inject} from 'tsyringe'


interface IRequestDTO {
  uuidfat:string;
}

@injectable()
class LoadIndexServices {

  constructor(
    @inject('FaturamentoViewsRepository')
    private fatRepository: FaturamentoViewsRepository){
    
  }

  public async index ({uuidfat}: IRequestDTO): Promise<Faturamento | undefined> {

      const result = await this.fatRepository.findById(uuidfat);

      if(!result){
        throw new AppError ('Não Existe',404);
      }

      return result;
  }
}

export default LoadIndexServices;
