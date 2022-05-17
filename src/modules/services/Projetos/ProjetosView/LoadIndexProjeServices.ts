import { getCustomRepository } from "typeorm";
import Projetos from '../../../../shared/infra/typeorm/entities/Projetos'
import ProjetosRepository from '../../../../shared/infra/typeorm/repositories/ProjetosRepository';
import AppError from "../../../../shared/errors/AppErrors";
import {injectable, inject} from 'tsyringe'


interface IRequestDTO {

  uuidprojeto: string,

}


@injectable()
class LoadIndexProjeServices {

    constructor(
        @inject('ProjetosRepository')
        private projetosRepository: ProjetosRepository){
        
      }
    public async index ({uuidprojeto}:IRequestDTO): Promise <Projetos | AppError> {
        
        const projeto = await this.projetosRepository.findById(uuidprojeto);

        if(!projeto){
            throw new AppError('Esse projeto não existe',404)
        }

        return projeto;
    }
}

export default LoadIndexProjeServices;
