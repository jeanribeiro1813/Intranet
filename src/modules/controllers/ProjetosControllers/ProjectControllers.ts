import { Request, Response } from 'express';
import LoadProjetosService from '../../services/Projetos/LoadProjetosServices';
import LoadProjetoSummaryService  from '../../services/Projetos/LoadySummaryProjeServices';




export default class ProjetosControllers {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadProjetoSummaryService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao);

  }

      //Loading

      public async loading (request: Request , response: Response){

        const loadingService = new LoadProjetosService();

        const result = await loadingService.load();

        return response.json(result);

      }


  }




