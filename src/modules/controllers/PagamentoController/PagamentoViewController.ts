import { Request, Response } from 'express';

import LoadSummyService  from '../../services/Pagamento/PagamentoView/LoadSummyService';
import LoadFilterServices  from '../../services/Pagamento/PagamentoView/LoadFilterServices';




export default class CargoController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao.summary);

  }
  public async filter(request: Request, response: Response): Promise<Response> {

    const {data_pagto} = request.body

    const loadFuncao = new LoadFilterServices();

    const funcao = await loadFuncao.filter({data_pagto});

    return response.json(funcao);

  }
  

    
  }




