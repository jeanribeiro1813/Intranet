import { Request, Response } from 'express';

import LoadSummyService  from '../../services/Pagamento/PagamentoView/LoadSummyService';
import LoadFilterServices  from '../../services/Pagamento/PagamentoView/LoadFilterServices';
import { container } from "tsyringe";




export default class CargoController {

 
  public async execute(request: Request, response: Response): Promise<Response> {

    const loadFuncao = container.resolve( LoadSummyService)

    const funcao = await loadFuncao.execute();
    
    return response.json(funcao);

  }
  public async filter(request: Request, response: Response): Promise<Response> {

    const {incidencia} = request.body

    const loadFuncao = container.resolve( LoadFilterServices)

    const funcao = await loadFuncao.filter({incidencia});

    return response.json(funcao);

  }
  

    
  }




