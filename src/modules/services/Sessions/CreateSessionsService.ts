import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Users from '../../../modules/typeorm/entities/Users';
import UsersRepository from '../../../modules/typeorm/repositories/UsersRepository'
import { compare, hash } from 'bcryptjs';




interface IRequestDTO {
    
    login:string ,   
    senha:string   

  }

// interface IResponseDTO{
//     user:Users;
// }

  class CreateSessionsService {

    public async execute({ 
        login,   
        senha,
    }: IRequestDTO): Promise<Users> {

      const usersRepository = getCustomRepository(UsersRepository);

      const user = await usersRepository.findByLogin(login);

      if (!user) {
        throw new AppError('Incorret Login/Senha verificar.',401);

      }

      const passwordConfir = await compare(senha, user.senha);

      if (!passwordConfir) {
        throw new AppError('Incorret Login/Senha verificar.',401);

      }

      return user;

    }
  }

  export default CreateSessionsService;
