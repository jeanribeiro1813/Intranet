import { Request, Response } from 'express';
import LoadSummyService  from '../../services/Adv/Adv_View/LoadSummyService';
import FilterService  from '../../services/Adv/Adv_View/FilterService';
import LoadIndexService  from '../../services/Adv/Adv_View/LoadIndexService';





export default class AtividadeController {

  public async execute(request: Request, response: Response): Promise<Response> {
    
    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.summary();

    return response.json(funcao.summary);

  }

  public async filter(request: Request, response: Response): Promise<Response> {

    const {cod_page,cod_adv} = request.body

    const loadFuncao = new FilterService();

    const funcao = await loadFuncao.filter({cod_page,cod_adv});

    return response.json(funcao);

  }

  public async index(request: Request, response: Response): Promise<Response> {

    const {codadv} = request.params

    const loadFuncao = new LoadIndexService();

    const funcao = await loadFuncao.index({codadv});

    return response.json(funcao);

  }

    
  }




