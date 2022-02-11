import LoadUserService  from "../services/User/LoadUsers";
import { Request, Response } from 'express';
import { getRepository } from "typeorm";
import User from '../typeorm/entities/users';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export default class UsersController {

    public async usuario(request: Request, response: Response): Promise<Response> {

      const loaduser = new LoadUserService();
  
      const user = await loaduser.execute();
      
      return response.json(user);
    }

    // Estou executando o service já aqui dentro encrypt senha e criação de User

    //Criação user
    
    public async saved(request: Request, response: Response){

      const repositories = getRepository(User);
    
      const {nombre,profesion,email,acesso,contrasena,user_situa,contacto} = request.body;
 
      const userExist = await repositories.findOne({where:{email}});
 
      if(userExist){
        return response.status(409).json('ERRO já existe usuario');
      }
 
      const user = repositories.create({nombre,profesion,email,acesso,contrasena,user_situa,contacto});

      await repositories.save(user);
 
      return response.json(user);



    }

    //Autenticação

    public async autenticacao(request: Request, response: Response){

      const repositories = getRepository(User);
    
      const {email,contrasena} = request.body;
 
      const user = await repositories.findOne({where:{ email }});
           
      if(!user){
        return response.sendStatus(401);
      }

      const isValidPassword = await bcrypt.compare(contrasena,user.contrasena);

      if(!isValidPassword){
        return response.sendStatus(401);
  
      }

      const token = jwt.sign({id: user.id},'regea', {expiresIn: '1d'});


      return response.json({user,token});


    }


    //Detelete Usuario

    public async delete(request: Request, response: Response){

      const repositories = getRepository(User);
    
      const {nombre} = request.params;
 
      const userExist = await repositories.findOne({where:{nombre}});
 
      if(userExist){
        return response.status(404).json('Não existe esse usuario');
      }

      await repositories.delete(nombre);
 
      return response.json("Delete feito");



    }
}