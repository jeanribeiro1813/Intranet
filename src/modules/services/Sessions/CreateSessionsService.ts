import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Users from '../../../modules/typeorm/entities/Users';
import UsersRepository from '../../../modules/typeorm/repositories/UsersRepository'
import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from "@config/auth";

// Tela de Sessão e criando autenticação


interface IRequestDTO {
    
    login:string ; 
    senha:string ;


  }

interface IResponseDTO{

    name:any;
    token:string;
    cargo :string;
    departamento:string
}

  class CreateSessionsService {

    public async execute({ 
        login,   
        senha
    }: IRequestDTO): Promise<IResponseDTO> {

      const usersRepository = getCustomRepository(UsersRepository);

      const user = await usersRepository.findByLogin(login);

      if (!user) {
        throw new AppError('Login/Senha Incorreto.',401);

      }

      const passwordConfir = await compare(senha, user.senha);

      if (!passwordConfir) {
        throw new AppError('Login/Senha Incorreto.',401);

      }

      //1 ° Parametro Payload , 2° Parametro Hash Posso pegar dentro do site MD5, 3° Configuração = ID e Validade do token 
      const token = sign({},authConfig.jwt.secret,{

        subject: user.codusuario,
        expiresIn: authConfig.jwt.expireIn,
  
      })


      

      return {
        cargo : user.cargo,
        name :user.nome_usuario,
        departamento:user.departamento,
        token
      };
      

    }
  }

  export default CreateSessionsService;
