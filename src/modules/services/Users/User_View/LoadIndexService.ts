import AppError from "../../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Users from '../../../../shared/infra/typeorm/entities/Users';
import UsersRepository from '../../../../shared/infra/typeorm/repositories/UsersRepository'
import {injectable, inject} from 'tsyringe'


interface IResponseDTO{

    uuidusuario:string;
}

@injectable()
class LoadIndexService {

    constructor(
        @inject('UsersRepository')
        private usersRepository: UsersRepository){
        
      }

    public async load({uuidusuario}:IResponseDTO): Promise <Users | AppError>{

        const index_Prod = await this.usersRepository.findById(uuidusuario);

        if (!index_Prod){
            throw new AppError ('Usuarios não encontrado',404)
        }
     
        return index_Prod;
    }
}

export default LoadIndexService;
