import { getCustomRepository } from "typeorm";
import Users from '../../../modules/typeorm/entities/Users';
import UsersRepository from '../../../modules/typeorm/repositories/UsersRepository'

interface IDadosUsers{
    codusuario : string,
    nome_usuario : string,
    email: string,
    contato:string,
    cargo: string,
    departamento: string
}

class LoadUsersService {

    public async load(): Promise<Users[]>{

        const loadService = getCustomRepository(UsersRepository);

        const userRepo = await loadService.find();

        return userRepo;
    }
}

export default LoadUsersService;
