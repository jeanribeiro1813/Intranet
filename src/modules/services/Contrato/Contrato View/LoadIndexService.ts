import AppError from "../../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Contrato from '../../../../shared/infra/typeorm/entities/Contrato';
import ContratoRepository from '../../../../shared/infra/typeorm/repositories/ContratoRepository'


interface IResponseDTO {

    uuidcontrato: string;


}





class LoadIndex{
    public async index ({uuidcontrato}:IResponseDTO): Promise< Contrato| AppError> {

        const Repository = getCustomRepository(ContratoRepository);

        const result = await Repository.findById(uuidcontrato)

        
        if(!result){
            throw new AppError ('Codigo de atividade não encontrado',404)
        }

        return result;
    }
}

export default LoadIndex;
