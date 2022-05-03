import { getCustomRepository } from "typeorm";
import Paginas from '../../../typeorm/entities/Paginas';
import PaginaRepository from '../../../typeorm/repositories/PaginaRepository'
import AppError from '../../../../shared/errors/AppErrors';


interface IResponseDTO {

    cod_page_uuid: string;

}





class LoadIndexService{
    public async index ({cod_page_uuid}:IResponseDTO): Promise< Paginas | AppError > {

        const Repository = getCustomRepository(PaginaRepository);

        const result = await Repository.findById(cod_page_uuid);

        if(!result){
            throw new AppError("Não Existe esse projeto",409);
            
        }

        return result;
    }
}

export default LoadIndexService;
