import { Request, Response } from 'express';
import Services from '../../services/FormPag/FormPagServices';
import { container } from "tsyringe";

export default class N3Controller {


  public async read(request: Request, response: Response): Promise<Response> {

    const services = container.resolve(Services);
      
    const funcao = await services.summary();

    return response.json(funcao);

  }


  //Criação
  public async create(request: Request, response: Response): Promise<Response>{

    const {uuidformpag, codigo, descricao} = request.body;

    const services = container.resolve(Services);
      

    const result = await services.create(
      {
        uuidformpag, codigo, descricao              

      }
    );

    if(result instanceof Error){
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }

  // Upgrade
  public async update (request :Request, response:Response): Promise<Response>{

    const {uuidformpag} = request.params

    const {codigo, descricao} = request.body

    const services = container.resolve(Services);

    const result = await services.update(

      {
        uuidformpag, codigo, descricao
      }

    )

    return response.json(result);



  }


  public async delete(request:Request, response:Response):Promise<Response>{

    const {uuidformpag} = request.params;

    const services = container.resolve(Services);

    await services.delete({uuidformpag});

    return response.json('Delete realizado com sucesso');
  }


    
  }




