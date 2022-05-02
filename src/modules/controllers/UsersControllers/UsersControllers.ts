import { Request, Response } from 'express';
import CreateUsersService  from '../../services/Users/CreateUsersService';
import LoadIndexService from '../../services/Users/LoadIndexService';
import FilterEspecificoUsersServices from '../../services/Users/FilterEspecificoUsersServices'


export default class UsersControllers {

  public async create(request: Request, response: Response): Promise<Response> {

    const { login,   
      senha,
      usuario,
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
      uuidcargo,
      uuiddeparta,
      alarm_id,
      cod_usuario,
      avatar,cpf_cnpj,
      equadramento,
      carga_horaria,
      proventos,
      va,
      vr,
      vt,
      banco,} = request.body;

    const createFuncao = new CreateUsersService();

    const funcao = await createFuncao.execute({ login,   
      senha,
      usuario,
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
      uuidcargo,
      uuiddeparta,
      alarm_id,
      cod_usuario,
      avatar,cpf_cnpj,
      equadramento,
      carga_horaria,
      proventos,
      va,
      vr,
      vt,
      banco,});

        if(funcao instanceof Error){
            return response.status(400).json(funcao.message);
       }
  

        return response.json('Usuario Cadastrado');

  }


      public async loading (request: Request , response: Response){

        const {uuidusuario} = request.params;

        const loadingService = new LoadIndexService();

        const result = await loadingService.load({uuidusuario});


        return response.json(result);

      }  

      public async filter (request: Request , response: Response){

        const {status,uuidusuario,h_status,uuiddeparta,uuidcargo} = request.body;
    
        const loadingService = new FilterEspecificoUsersServices();
    
        const result = await loadingService.filterService({status,uuidusuario,h_status,uuiddeparta,uuidcargo});
    
    
        return response.json(result);
    
      }  
    

  }




