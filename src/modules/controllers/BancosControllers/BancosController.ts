import { Request, Response } from 'express';
import Services from '../../services/Bancos/BancosServices';
import { container } from "tsyringe";


export default class N3Controller {


  public async read(request: Request, response: Response): Promise<Response> {

    const services = container.resolve(Services);
      
    const funcao = await services.read();

    return response.json(funcao);

  }


  //Criação
  public async create(request: Request, response: Response): Promise<Response>{

    const {uuidbanco, codigo, descricao} = request.body;

    const services = container.resolve(Services);

    const result = await services.create(
      {
        uuidbanco, codigo, descricao              

      }
    );

    if(result instanceof Error){
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }

  // Upgrade
  public async update (request :Request, response:Response): Promise<Response>{

    const {uuidbanco} = request.params

    const {codigo, descricao} = request.body

    const services = container.resolve(Services);

    const result = await services.update(

      {
        uuidbanco, codigo, descricao
      }

    )

    return response.json(result);



  }


  public async delete(request:Request, response:Response):Promise<Response>{

    const {uuidbanco} = request.params;

    const services = container.resolve(Services);

    await services.delete({uuidbanco});

    return response.json('Delete realizado com sucesso');
  }


    
  }




