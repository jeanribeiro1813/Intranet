import LoadProjects from '@modules/services/Projetos//ProjetosView/LoadProjectsServices';
import { Request, Response } from 'express';
import LoadProjetoSummaryService  from '../../services/Projetos/ProjetosView/LoadySummaryProjeServices';




export default class ProjetosControllers {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadProjetoSummaryService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao);

  }


      /**
       * This method is uded for get projects by filter : nprojeto , contrato, status
       */

      public async loadProjects(request: Request, response: Response): Promise< Response > {
      
        const {nprojeto, contrato, status} = request.body;

        const P = new LoadProjects();

        const projetos = await P.loadProjetos({nprojeto,contrato,status});

        return response.json(projetos);

      }

 



  }




