import LoadProjects from '../../services/Projetos//ProjetosView/LoadProjectsServices';
import { Request, Response } from 'express';
import LoadProjetoSummaryService  from '../../services/Projetos/ProjetosView/LoadySummaryProjeServices';
import LoadIndexProjeServices  from '../../services/Projetos/ProjetosView/LoadIndexProjeServices';



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
      
        const { departamento, status} = request.body;

        const P = new LoadProjects();

        const projetos = await P.loadProjetos({departamento,status});

        return response.json(projetos);

      }

      public async index(request: Request, response: Response): Promise< Response > {
      
        const {uuidprojeto} = request.params;

        const P = new LoadIndexProjeServices();

        const projetos = await P.index({uuidprojeto});

        return response.json(projetos);

      }

 



  }




