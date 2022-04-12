import { Request, Response } from 'express';

import LoadSummyService  from '../../services/Pagamento/PagamentoView/LoadSummyService';




export default class CargoController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao.summary);

  }


    
  }




