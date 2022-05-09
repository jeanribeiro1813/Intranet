import { Request, Response } from 'express';
import Services from '../../services/N3/N3Services';


export default class N3Controller {


  public async read(request: Request, response: Response): Promise<Response> {

    const services = new Services();
      
    const funcao = await services.read();

    return response.json(funcao);

  }


  //Criação
  public async create(request: Request, response: Response): Promise<Response>{

    const {uuidn3, codigo, descricao} = request.body;

    const services = new Services();

    const result = await services.create(
      {
        uuidn3, codigo, descricao              

      }
    );

    if(result instanceof Error){
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }

  // Upgrade
  public async update (request :Request, response:Response): Promise<Response>{

    const {uuidn3} = request.params

    const {codigo, descricao} = request.body

    const services = new Services();

    const result = await services.update(

      {
        uuidn3, codigo, descricao
      }

    )

    return response.json(result);



  }


  public async delete(request:Request, response:Response):Promise<Response>{

    const {uuidn3} = request.params;

    const services = new Services();

    services.delete({uuidn3});

    return response.json('Delete realizado com sucesso');
  }


    
  }




