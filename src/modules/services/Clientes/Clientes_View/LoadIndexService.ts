import AppError from "../../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Clientes from '../../../../shared/infra/typeorm/entities/Clientes';
import ClientesRepository from '../../../../shared/infra/typeorm/repositories/ClientesRepository'
import {injectable, inject} from 'tsyringe'



interface IResponseDTO {

    uuidcliente: string;


}


@injectable()
class LoadIndex {

  constructor(
    @inject('ClientesRepository')
    private clientesRepository: ClientesRepository){
    
  }

    public async index ({uuidcliente}:IResponseDTO): Promise< Clientes| AppError> {

        const result = await this.clientesRepository.findById(uuidcliente)

        
        if(!result){
            throw new AppError ('Codigo de atividade não encontrado',404)
        }

        return result;
    }
}

export default LoadIndex;
