import AppError from "../../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Carros from '../../../../shared/infra/typeorm/entities/Carros';
import CarrosRepository from '../../../../shared/infra/typeorm/repositories/CarrosRepository'


interface IResponseDTO {

    id_uuid: string;  

}





class LoadClientesSummaryService{
    public async index ({id_uuid}:IResponseDTO): Promise< Carros| AppError> {

        const Repository = getCustomRepository(CarrosRepository);

        const result = await Repository.findById(id_uuid)

        
        if(!result){
            throw new AppError ('Codigo de atividade não encontrado',404)
        }

        return result;
    }
}

export default LoadClientesSummaryService;
