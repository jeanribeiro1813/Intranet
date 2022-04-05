import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import UsersRepository from '../../typeorm/repositories/UsersRepository';
import UserTokenRepository from '../../typeorm/repositories/UserTokenRepository'
import EtherelMail from '@config/mail/etherelMail'
import path from 'path';

//Aqui só vou precisar do email justamente para envio do link de recuperação de senha 
interface IRequestDTO {

    email:string 
  }

/*Na Teoria o que acontece é que ao enviar o request esqueceu senha , dentro da tabela users_tokens , cria um novo token para quando o colaborador
for mudar a senha e essa tabela acossia uma novo token ligando com o id do usuario*/

  class SendForgotPasswordService {

    //O Metodo Void já informa que não precisa retornar
    public async execute({ email }: IRequestDTO): Promise<void> {

      //Pegando o custom do Repositorio de Usuarios
      const usersRepository = getCustomRepository(UsersRepository);

      //Pegando o custo do Repositorio de Usuario token 
      const userTokenRepository = getCustomRepository(UserTokenRepository)

      //Pegando o usuario por email 
      const user = await usersRepository.findByEmail(email)

      if(!user){
        throw new AppError ('Usario não existe',401)
      }

      //Gerando um token , pegando pelo custom de generate do Repositorio de Token
      const {token}  = await userTokenRepository.generate(user.codusuario);

      //Pegando o caminho do arquivo que criei 
      const forgotPasswordTemplate = path.resolve(__dirname, '..', 'Users','views','forgot_password.hbs')

      //Passando a função do EtherelMail com o email que deve receber e o que vai apresentar no corpo do email no caso pegando a Class EtherelMail e o seu modulo sendMail
      //Passando da mesma forma que esta no modulo
      await EtherelMail.sendMail({
  
        to:{
          name: user.nome_usuario,
          email: user.email
        },
        from: {
          name :'Equipe Regea',
          email:'suporte_regea@uol.com.br'
       },

        subject: '[Equipe Regea] Recuperação de Senha ',

      templateData:{

        //Estou passando a variavel que conta o arquivo HTML
        file : forgotPasswordTemplate,
        //Aqui estou passando o nome do usuario e qual url vai o token para o usuario fazer o reset da senha 
        variables :{
          name:   user.nome_usuario,
          link : `http://localhost:3333/reset_password?token=${token}`,
        },

    } ,

      })

    }

  
  }

  export default SendForgotPasswordService;
