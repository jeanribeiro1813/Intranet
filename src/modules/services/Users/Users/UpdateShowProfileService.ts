import { getCustomRepository } from "typeorm";
import Users from '../../../../shared/infra/typeorm/entities/Users';
import {compare, hash} from 'bcryptjs'
import UsersRepository from '../../../../shared/infra/typeorm/repositories/UsersRepository'
import AppError from '../../../../shared/errors/AppErrors';
import RedisCache from '../../../../shared/cache/RedisCache';


//Como esse serviço é com o usuario logado tenho que utilizar o user_id que está dentro da tabela user Token
// No qual já esta logado e assim terei a garantia que o proprio usuario que vai modificar a sua senha
interface IRequest{


    user_id : string,
    usuario: string,
    email: string,
    //Deixando opicional Assim o usuario pode ter a opção de mudar não sendo obrigatorio
    senha?: string,
    old_senha?:string,
   
}

class UpdateShowProfileService {

    public async updateProfile({user_id,usuario,email,senha,old_senha} :IRequest): Promise<Users | AppError>{

        const userUpdate = getCustomRepository(UsersRepository);

        const redisCache = new RedisCache();

        //buscando por id
        const user = await userUpdate.findById(user_id);

        if(!user){
            throw new AppError ('Usuario não Existe',409)
        }

        //Buscando por email
        const userEmail = await userUpdate.findByEmail(email);

        //Se existir um email e esse é o codigo do email for igual

        if(userEmail && userEmail.uuidusuario !== user_id){
            throw new AppError('Já existe usuario com esse email',409)
        }

        //Condigção de tiver uma senha e o usuario não colocou a senha antiga
        if(senha &&  !old_senha){
            throw new AppError('Colocar a senha antiga',409)

        }

        //Condição que vai rodar para checar a velha senha
        //Colocando condição caso a senha do usuario estiver errada
        if(senha && old_senha){
            //Usando o compare para pegar a velha senha e comparando com a senha do banco para vê se é igual 
            const checkOldPassowrd = await compare(old_senha, user.senha);

            if (!checkOldPassowrd){
                throw new AppError ('Senha antiga não existe',409)
            }

            //Criando um hash para a nova senha

            user.senha = await hash(senha,8);
        }

        //Atualizando os demais campos

        await redisCache.invalidation('API_REDIS_USER');

        user.usuario = usuario ? usuario : user.usuario;
        user.email = email ? email : user.email;

        await userUpdate.save(user)

        return user;
    }
}

export default UpdateShowProfileService;
