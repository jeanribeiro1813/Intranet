import { getCustomRepository } from "typeorm";
import Paginas from '../../../../shared/infra/typeorm/entities/Paginas';
import PaginaRepository from '../../../../shared/infra/typeorm/repositories/PaginaRepository'
import AppError from '../../../../shared/errors/AppErrors';
import {injectable, inject} from 'tsyringe'


interface IResponseDTO {

    cod_page_uuid: string;

}


@injectable()
class LoadIndexService {

    constructor(
        @inject('PaginaRepository')
        private paginaRepository: PaginaRepository){
        
      }

    public async index ({cod_page_uuid}:IResponseDTO): Promise< Paginas | AppError > {

        const result = await this.paginaRepository.findById(cod_page_uuid);

        if(!result){
            throw new AppError("Não Existe esse projeto",409);
            
        }

        return result;
    }
}

export default LoadIndexService;
