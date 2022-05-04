import { getCustomRepository } from "typeorm";
import Dias from '../../../typeorm/entities/Dias';
import DiasRepository from '../../../typeorm/repositories/DiasRepository'
import AppError from '../../../../shared/errors/AppErrors';


interface IResponseDTO {

    uuiddiasuteis: string;

}





class LoadIndexService{
    public async index ({uuiddiasuteis}:IResponseDTO): Promise< Dias | AppError > {

        const Repository = getCustomRepository(DiasRepository);

        const result = await Repository.findById(uuiddiasuteis);

        if(!result){
            throw new AppError("Não Existe ",409);
            
        }

        return result;
    }
}

export default LoadIndexService;
