import AppError from "../../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Clientes from '../../../../shared/infra/typeorm/entities/Clientes';
import ClientesRepository from '../../../../shared/infra/typeorm/repositories/ClientesRepository'



interface IResponseDTO {

    uuidcliente: string;


}





class LoadIndex{
    public async index ({uuidcliente}:IResponseDTO): Promise< Clientes| AppError> {

        const Repository = getCustomRepository(ClientesRepository);

        const result = await Repository.findById(uuidcliente)

        
        if(!result){
            throw new AppError ('Codigo de atividade não encontrado',404)
        }

        return result;
    }
}

export default LoadIndex;
