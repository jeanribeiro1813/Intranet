import { Request, Response } from 'express';
import CreateRamaisServices from '../../services/Ramais/Ramais/CreateRamaisServices';
import UpdateRamaisServices from '../../services/Ramais/Ramais/UpdateRamaisServices';
import DeleteRamaisServices from '../../services/Ramais/Ramais/DeleteRamaisServices';
import LoadSummyService from '../../services/Ramais/Ramais_View/LoadSummyService';



export default class N3Controller {


  public async read(request: Request, response: Response): Promise<Response> {

    const services = new LoadSummyService();
      
    const funcao = await services.executeDes();

    return response.json(funcao);

  }


  //Criação
  public async create(request: Request, response: Response): Promise<Response>{

    const {uuidramal,ramal,cod_atv} = request.body;

    const services = new CreateRamaisServices();

    const result = await services.create(
      {
        uuidramal,ramal,cod_atv            

      }
    );

    if(result instanceof Error){
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }

  // Upgrade
  public async update (request :Request, response:Response): Promise<Response>{

    const {uuidramal} = request.params

    const {ramal,cod_atv } = request.body

    const services = new UpdateRamaisServices();

    const result = await services.update(

      {
        uuidramal,ramal,cod_atv
      }

    )

    return response.json(result);



  }


  public async delete(request:Request, response:Response):Promise<Response>{

    const {uuidramal} = request.params;

    const services = new DeleteRamaisServices();

    await services.delete({uuidramal});

    return response.json('Delete realizado com sucesso');
  }


    
  }




