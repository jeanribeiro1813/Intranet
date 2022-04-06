import { getCustomRepository } from "typeorm";
import Users from '../../../modules/typeorm/entities/Users';
import UsersRepository from '../../../modules/typeorm/repositories/UsersRepository'


class LoadUsersService {

    public async load(): Promise<Users[]>{

        const loadService = getCustomRepository(UsersRepository);

        const userRepo = await loadService.find();

        return userRepo;
    }
}

export default LoadUsersService;
