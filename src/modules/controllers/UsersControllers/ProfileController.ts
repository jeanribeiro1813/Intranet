import { Request, Response } from 'express';
import ShowProfileService from '../../services/Users/Users/ShowProfileService';
import UpdateShowProfileService from '../../services/Users/Users/UpdateShowProfileService';



export default class ProfileController {

      //Loading

      public async show (request: Request , response: Response):Promise<Response>{

        const showProfiles = new ShowProfileService();

        const user_id = request.user.cod_usuario_uuid

        const result = await showProfiles.showProfile({user_id});

        const usuario = [{
            uuidusuario:result.uuidusuario,
            usuario:result.usuario,
            login : result.login,
            email: result.email,
     
        }]
            

        return response.json(usuario);

      }  

  public async update(request: Request, response: Response): Promise<Response> {
    

    const user_id = request.user.cod_usuario_uuid;
    
    const {usuario,email,senha,old_senha} = request.body;

    const updateFuncao = new UpdateShowProfileService();

    const user = await updateFuncao.updateProfile({
        user_id,usuario,email,senha,old_senha});

        

    return response.json("Troca de Senha Realizada com sucesso");

  }




  }




