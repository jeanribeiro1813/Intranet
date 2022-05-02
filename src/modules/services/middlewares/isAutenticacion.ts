import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from '../../../shared/errors/AppErrors';
import authConfig from '../../../config/auth';
import UsersRepository from '../../../modules/typeorm/repositories/UsersRepository'
import { getCustomRepository } from "typeorm";
import Users from "@modules/typeorm/entities/Users";

interface TokenPayload{
    iat: number,
    exp:number,
    sub:string,
    
}

//Criando autenticação para colocar nas rotas
export default async function isAutenticacion (request:Request, response:Response, next: NextFunction): Promise<void>{
    
    //De onde virao token dentro de headers
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError('JWT faltando token',401)
    }

    //Bearer kosksoaksoakoskaoskaosk -  quebrando a string [0] bearer [1] token
    const [type,token] = authHeader.split(' ');

    try{
        //Verificando o token e a secret ( Ele vai verificar se o token foi criado com a secret)
        const decodeToken = verify( token , authConfig.jwt.secret);

        //Sub é o ID do usuario
        const {sub} = decodeToken as TokenPayload;

        // console.log(decodeToken)

         //Reescrevendo a função requests dentro da pasta @types / express
        request.user = {

            cod_usuario_uuid:sub,
            
        }


        return next();
    }
    catch{
        throw new AppError('Invalid token',401);
    }
}