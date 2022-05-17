import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import UsersRepository from '../../../../shared/infra/typeorm/repositories/UsersRepository';
import {isAfter,addHours} from 'date-fns';
import UserTokenRepository from '../../../../shared/infra/typeorm/repositories/UserTokenRepository';
import {hash} from 'bcrypt';

//Aqui só vou precisar do email justamente para envio do link de recuperação de senha 
interface IRequestDTO {

    token:string;
    senha: string;
  }

  //Aqui é feito para pegar o novo token se o token estiver no tempo definido que é até 2h , a partir desse momento o usuario tem acesso a mudar a senha


  class ResetPasswordService {

    public async execute({ token, senha }: IRequestDTO): Promise<void> {

      //Pegando o custom do Repositorio de Usuarios
      const usersRepository = getCustomRepository(UsersRepository);

      //Pegando o custo do Repositorio de Usuario token 
      const userTokenRepository = getCustomRepository(UserTokenRepository)

      //Pegando o token do usuario 
      //Pegando o Token criado do usuario no qual foi enviado pela função de esquecer a senha 
      const userToken = await userTokenRepository.findByToken(token)

      console.log(userToken?.token)

  
      // Condição de caso o Token não existir , se o usuario não apertou no esquecer senha.
      if(!userToken){
        throw new AppError ('Token do usuario não existe',401)
      }

      //Se o Token existir vai pegar o Id do Usuario pela variavel userToken da TABELA USERS_TOKENS
      const user = await usersRepository.findById(userToken.user_id);
      

      //Vai verificar se existe o usuario 
      if(!user){
        throw new AppError ('Usuario não existe',401)
      }
      
      /*
        Criando a questão de validação do Token 
      */

      // Pegando a data de criação do Token da TABELA USERS_TOKENS
      const tokenCreatedAt = userToken.created_at;
      
      // Criando uma Variavel para comparar o tempo que foi criado o Token e o tempo que estou definidino no caso a cada 2 horas.

      // ** Verificar mais afundo a função addHours
      const compareDate = addHours(tokenCreatedAt,2);

      //Criando uma condição para verificar pela data atual e a variavel compareDate se já passou as 2 horas 
      if(isAfter(Date.now(),compareDate)){
        throw new AppError ('Token expirado',405)
      }

      //Nesse caso o usuario esta recebendo uma nova senha com criptografia.
      user.senha  = await hash(senha,8);

      //Salvando o mesmo 
      await usersRepository.save(user);

      
    }  
  }

  export default ResetPasswordService;
