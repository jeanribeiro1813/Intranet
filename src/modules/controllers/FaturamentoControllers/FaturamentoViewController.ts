import { Request, Response } from 'express';
import LoadSummyService  from '../../services/Faturamento/FaturamentoView/LoadSummyService';
import LoadIndexServices from '../../services/Faturamento//FaturamentoView/LoadIndexServices';
import LoadPorUsersServices from '../../services/Faturamento/FaturamentoView/LoadPorUsuario';



export default class FaturamentoViewController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao.summary);

  }

      public async exibir (request: Request, response:Response): Promise<Response>{

        const {codfat} = request.params;

        const indexFat = new LoadIndexServices();

        const showPerIndex = await indexFat.execute({codfat});

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

        const {usuario,data} = request.body;

        const indexFat = new LoadPorUsersServices();

    
        const showPorIndex = await indexFat.execute({usuario, data});
        
        
        return response.json(showPorIndex);
      }
    
  }




