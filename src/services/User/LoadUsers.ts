import { getCustomRepository, Not, IsNull } from 'typeorm'
import UserRepository from '../../typeorm/repositories/UsersRepository'


interface IResponseDTO {
    summary: IUserItemOfSummary[];
}

interface IUserItemOfSummary {
    id: number;
    nombre: string;
    profesion: string;
    email: string;
    acesso: string;
    contrasena: string;
    user_situa: string;
    contato: number;
}

class LoadUserService{
    public async execute (): Promise<IResponseDTO> {
        
        const UsuarioRepository = getCustomRepository(UserRepository);

        const user = await UsuarioRepository.find({
            nombre: Not(IsNull()),
        });

        const summary = user.map((use) =>{
            const UserItemOfSummary = {
                id: use.id,
                nombre:use.nombre,
                profesion:use.profesion,
                email:use.email,
                acesso: use.acesso,
                contrasena:use.contrasena,
                user_situa:use.user_situa,
                contato:use.contacto,
            }
            return UserItemOfSummary;
            }
            
        )

        const responseDTO = {
            summary,
        };

        return responseDTO;
    }
}

export default LoadUserService;

