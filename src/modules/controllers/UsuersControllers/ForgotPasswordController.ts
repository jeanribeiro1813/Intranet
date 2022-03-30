import SendForgotPasswordService from '@modules/services/Users/SendForgotPasswordService';
import { Request, Response } from 'express';



export default class ForgotPasswordControllers {

  public async create(request: Request, response: Response): Promise<Response> {

    //Passando no body apenas o email 
    const {email} = request.body;

    const SendForgotPasswordEmail = new SendForgotPasswordService();

    //Por não retornar nada não preciso colocar o await dentro de uma variavel 
    // Vai executar dentro de email pois é o que o parametro que esta passando dentro da body
    await SendForgotPasswordEmail.execute({email});


    return response.json('Verificar o email para Nova senha');

  }

   }