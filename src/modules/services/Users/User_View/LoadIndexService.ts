import AppError from "../../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Users from '../../../../shared/infra/typeorm/entities/Users';
import UsersRepository from '../../../../shared/infra/typeorm/repositories/UsersRepository'

interface IResponseDTO{

    uuidusuario:string;
}

class LoadIndexService {

    public async load({uuidusuario}:IResponseDTO): Promise <Users | AppError>{

        const loadService = getCustomRepository(UsersRepository);

        const index_Prod = await loadService.findByCodUser(uuidusuario);

        if (!index_Prod){
            throw new AppError ('Usuarios não encontrado',404)
        }
     
        return index_Prod;
    }
}

export default LoadIndexService;
