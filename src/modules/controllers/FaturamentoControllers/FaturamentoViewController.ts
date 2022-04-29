import { Request, Response } from 'express';
import LoadSummyService  from '../../services/Faturamento/FaturamentoView/LoadSummyService';
import LoadPorUsersServices from '../../services/Faturamento/FaturamentoView/LoadPorUsuario';
import LoadIndexServices from '../../services/Faturamento/Faturamento/LoadIndexServices';



export default class FaturamentoViewController {

  public async execute(request: Request, response: Response): Promise<Response> {

    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao.summary);

  }

  public async exibir (request: Request, response:Response): Promise<Response>{

    const {uuidfat} = request.params;

    const indexFat = new LoadIndexServices();

    const showPerIndex = await indexFat.load({uuidfat});

    const result = {
                
    uuidfat: showPerIndex?.uuidfat,
    cliente: showPerIndex?.cliente,
    empresa: showPerIndex?.empresa,
    departamento: showPerIndex?.departamento,
    nprojeto: showPerIndex?.nprojeto,
    uuidprojeto: showPerIndex?.uuidprojeto,
    projeto: showPerIndex?.projeto,
    atividade: showPerIndex?.atividade,
    data: showPerIndex?.data,
    inicio: showPerIndex?.inicio,
    fim: showPerIndex?.fim,
    obs: showPerIndex?.obs,
    status:showPerIndex?.status
    }

    return response.json(showPerIndex);

  }

  public async execuUsers(request: Request, response: Response): Promise< Response > {

    const {uuidusuario,data} = request.body;

    const indexFat = new LoadPorUsersServices();


    const showPorIndex = await indexFat.execute({uuidusuario, data});


    return response.json(showPorIndex);

  }

}




