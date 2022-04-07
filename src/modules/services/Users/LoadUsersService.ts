import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Users from '../../../modules/typeorm/entities/Users';
import UsersRepository from '../../../modules/typeorm/repositories/UsersRepository'

interface IResponseDTO{
    status:string;
}

class LoadUsersService {

    public async load({status}:IResponseDTO): Promise<Users[] | AppError>{

        const loadService = getCustomRepository(UsersRepository);

        const index_Prod = await loadService.createQueryBuilder().select()
        .where(`status :: text  ILIKE :status `, 
  
        {status: `%${status}%`}).getMany();

        return index_Prod;
    }
}

export default LoadUsersService;
