import { getCustomRepository } from "typeorm";
import Projetos from '../../../../shared/infra/typeorm/entities/Projetos'
import ProjetosRepository from '../../../../shared/infra/typeorm/repositories/ProjetosRepository';
import AppError from "../../../../shared/errors/AppErrors";


interface IRequestDTO {

  uuidprojeto: string,

}





class LoadIndexProjeServices{

    public async index ({uuidprojeto}:IRequestDTO): Promise <Projetos | AppError> {
        
        const projetosrRepository = getCustomRepository(ProjetosRepository);

        const projeto = await projetosrRepository.findByCode(uuidprojeto);

        if(!projeto){
            throw new AppError('Esse projeto não existe',404)
        }

        return projeto;
    }
}

export default LoadIndexProjeServices;
