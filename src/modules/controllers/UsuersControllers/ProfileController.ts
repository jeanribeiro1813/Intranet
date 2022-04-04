import { Request, Response } from 'express';
import ShowProfileService from '@modules/services/Users/ShowProfileService';
import UpdateShowProfileService from '@modules/services/Users/UpdateShowProfileService';



export default class ProfileController {

      //Loading

      public async show (request: Request , response: Response):Promise<Response>{

        const showProfiles = new ShowProfileService();

        const user_id = request.user.cod_usuario_uuid

        const result = await showProfiles.showProfile({user_id});

        const usuario = [{
            cod_usuario_uuid:result.cod_usuario_uuid,
            cod_usuario: result.cod_usuario,
            nome_usuario:result.nome_usuario,
            login : result.login,
            email: result.email,
            cargo: result.cargo,
            departamento: result.departamento    
        }]
            

        return response.json(usuario);

      }  

  public async update(request: Request, response: Response): Promise<Response> {
    

    const user_id = request.user.cod_usuario_uuid;
    
    const {nome_usuario,email,senha,old_senha} = request.body;

    const updateFuncao = new UpdateShowProfileService();

    const user = await updateFuncao.updateProfile({
        user_id,nome_usuario,email,senha,old_senha});

        

    return response.json("Troca de Senha Realizada com sucesso");

  }




  }




