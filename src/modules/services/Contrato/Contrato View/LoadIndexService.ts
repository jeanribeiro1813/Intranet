import AppError from "../../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Contrato from '../../../../shared/infra/typeorm/entities/Contrato';
import ContratoRepository from '../../../../shared/infra/typeorm/repositories/ContratoRepository'
import {injectable, inject} from 'tsyringe'


interface IResponseDTO {

    uuidcontrato: string;


}

@injectable()
class LoadIndex {

  constructor(
    @inject('ContratoRepository')
    private contratoRepository: ContratoRepository){
    
  }
    public async index ({uuidcontrato}:IResponseDTO): Promise< Contrato| AppError> {

        const result = await this.contratoRepository.findById(uuidcontrato)

        
        if(!result){
            throw new AppError ('Codigo de atividade não encontrado',404)
        }

        return result;
    }
}

export default LoadIndex;
