import { Request, Response } from 'express';

import LoadSummyService from '../../services/StatusPagamento/StatusPagamentoView/LoadSummyService';
import FilterService from '../../services/StatusPagamento/StatusPagamentoView/FilterService';
import CreateProjetosServices from '../../services/StatusPagamento/StatusPagamento/CreateProjetosServices';





export default class StatusController {


  public async summary(request:Request, response:Response):Promise<Response>{

    const statusPag = new LoadSummyService();

    const result = await statusPag.summary();

    return response.json(result);
  }

  public async filter(request:Request, response:Response):Promise<Response>{

    const {visivel} = request.body

    const statusPag = new FilterService();

    const result = await statusPag.filter({visivel});

    return response.json(result);
  }

 //Criação Cargo
 public async create(request: Request, response: Response): Promise<Response>{

  const {sttpguuid,
    status,
    visivel} = request.body;

  const service = new CreateProjetosServices();

  const result = await service.execute(
    {
      sttpguuid,
      status,
      visivel
    }
  );

  if(result instanceof Error){
    return response.status(400).json(result.message);
}

  return response.json(result);
}
    
  }




