import ResetPasswordService from '../../services/Users/Users/ResetPasswordService';
import { Request, Response } from 'express';



export default class ResetPasswordController {

  public async create(request: Request, response: Response): Promise<Response> {

    //Para o Reset de senha , passar no token 
    const {token , senha } = request.body;

    const resetPassword = new ResetPasswordService();

    //Por não retornar nada não preciso colocar o await dentro de uma variavel 
    await resetPassword.execute({token , senha});


    return response.json('Entre com a Nova Senha ');

  }

   }