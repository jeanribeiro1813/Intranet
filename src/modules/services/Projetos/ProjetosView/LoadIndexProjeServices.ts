import { getCustomRepository } from "typeorm";
import Projetos from '../../../typeorm/repositories/Projetos'
import ProjetosViewRepository from '../../../typeorm/repositories/ProjetosViewRepository';
import AppError from "../../../../shared/errors/AppErrors";


interface IRequestDTO {

  uuidprojeto: string,

}





class LoadIndexProjeServices{

    public async index ({uuidprojeto}:IRequestDTO): Promise <Projetos | AppError> {
        
        const projetosrRepository = getCustomRepository(ProjetosViewRepository);

        const projeto = await projetosrRepository.findByCode(uuidprojeto);

        if(!projeto){
            throw AppError('Esse projeto não existe',404)
        }

        return projeto;
    }
}

export default LoadIndexProjeServices;
