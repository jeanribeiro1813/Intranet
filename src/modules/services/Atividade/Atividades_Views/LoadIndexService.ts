import AppError from "../../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Atividades from '../../../typeorm/entities/Atividades';
import AtividadeRepository from '../../../typeorm/repositories/AtividadeRepository'



interface IResponseDTO {

    uuidatividade: string;  

}





class LoadClientesSummaryService{
    public async index ({uuidatividade}:IResponseDTO): Promise< Atividades| AppError> {

        const Repository = getCustomRepository(AtividadeRepository);

        const result = await Repository.findById(uuidatividade)

        
        if(!result){
            throw new AppError ('Codigo de atividade não encontrado',404)
        }

        return result;
    }
}

export default LoadClientesSummaryService;
