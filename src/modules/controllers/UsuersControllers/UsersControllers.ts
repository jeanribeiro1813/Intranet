import { Request, Response } from 'express';
import LoadUsersService from '../../services/Users/LoadUsersService';
import CreateUsersService  from '../../services/Users/CreateUsersService';




export default class UsersControllers {

  public async create(request: Request, response: Response): Promise<Response> {

    const {login,senha,
        nome_usuario,
        n_cnh,
        dt_validade,
        email,
        ramal,
        status,
        h_status,
        last_log,
        log_time,
        dt_nasc,
        contato,
        contato2,
        cargo,
        departamento,
        alarm_id,
        cod_usuario,
        avatar} = request.body;

    const createFuncao = new CreateUsersService();

    const funcao = await createFuncao.execute({login,senha,
        nome_usuario,
        n_cnh,
        dt_validade,
        email,
        ramal,
        status,
        h_status,
        last_log,
        log_time,
        dt_nasc,
        contato,
        contato2,
        cargo,
        departamento,
        alarm_id,
        cod_usuario,
        avatar});

        if(funcao instanceof Error){
            return response.status(400).json(funcao.message);
       }
  

        return response.json(funcao);

  }

      //Loading

      public async loading (request: Request , response: Response){

        const loadingService = new LoadUsersService();

        const result = await loadingService.load();

        return response.json(result);

      }  


  }




