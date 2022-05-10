import { Request, Response } from 'express';

import LoadSummyService  from '../../services/Pagamento/PagamentoView/LoadSummyService';
import LoadFilterServices  from '../../services/Pagamento/PagamentoView/LoadFilterServices';
import LoadIndexService  from '../../services/Pagamento/PagamentoView/LoadIndexService';




export default class CargoController {

  public async index(request: Request, response: Response): Promise<Response> {

    const {uuidpagamento} = request.params

    const loadFuncao = new LoadIndexService();

    const funcao = await loadFuncao.index({uuidpagamento});

    return response.json(funcao);

  }

  public async execute(request: Request, response: Response): Promise<Response> {

    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.execute();
    
    return response.json(funcao);

  }
  public async filter(request: Request, response: Response): Promise<Response> {

    const {incidencia} = request.body

    const loadFuncao = new LoadFilterServices();

    const funcao = await loadFuncao.filter({incidencia});

    return response.json(funcao);

  }
  

    
  }




