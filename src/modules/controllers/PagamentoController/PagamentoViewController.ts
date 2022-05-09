import { Request, Response } from 'express';

import LoadSummyService  from '../../services/Pagamento/PagamentoView/LoadSummyService';
import LoadFilterServices  from '../../services/Pagamento/PagamentoView/LoadFilterServices';




export default class CargoController {

  public async execute(request: Request, response: Response): Promise<Response> {

    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.execute();
    
    console.log(funcao)

    return response.json(funcao);

  }
  public async filter(request: Request, response: Response): Promise<Response> {

    const {incidencia} = request.body

    const loadFuncao = new LoadFilterServices();

    const funcao = await loadFuncao.filter({incidencia});

    return response.json(funcao);

  }
  

    
  }




