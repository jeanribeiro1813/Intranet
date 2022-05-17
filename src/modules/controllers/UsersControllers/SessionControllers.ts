import { Request, Response } from 'express';
import CreateSessionsService from '../../services/Sessions/CreateSessionsService';
import { container } from "tsyringe";

export default class SessionController {
    public async create (request: Request, response: Response):Promise <Response>{
        
        //Criação de Sessão de usuario no caso quando o usuario for fazer o login
        const{login, senha} = request.body;
        

        const createSession = container.resolve(CreateSessionsService);

        const users = await createSession.execute({
            login, senha
        });

        return response.json(users)
    } 
}