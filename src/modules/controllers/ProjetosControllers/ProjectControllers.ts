import CreateProjetosServices from '@modules/services/Projetos/CreateProjetosServices';
import LoadProjects from '@modules/services/Projetos/LoadProjectsServices';
import { Request, Response } from 'express';
import LoadProjetoSummaryService  from '../../services/Projetos/LoadySummaryProjeServices';
import UpdateProjetoServicets from '../../services/Projetos/UpdateProjetoService'




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

    
      //Update
      public async update (request: Request , response: Response): Promise<Response>{

        const {uuidprojeto} = request.params

        const {contrato,data,nprojeto,projeto,cliente,cliente2, 
          numero,
          gerente,
          coordenador,
          equipe,
          status,
          proposta,
          departamento,
          previsao,
          nproc_origem,
          valor,
          memoalt,
          dt_fim,
          cod_proj} = request.body



        const updateService = new UpdateProjetoServicets();

        const result = await updateService.updateProj(
          
          {
            uuidprojeto,
          contrato,
          data,
          departamento,
          nprojeto,
          projeto,
          cliente,
          cliente2, 
          numero,
          gerente,
          coordenador,
          equipe,
          status,
          proposta,
          previsao,
          nproc_origem,
          valor,
          memoalt,
          dt_fim,
          cod_proj
        }
          
          );

        return response.json(result);

      }

      //Crate
      public async create (request: Request, response: Response): Promise< Response > {
        const {uuidprojeto,data,contrato,nprojeto,projeto,cliente,cliente2, 
          numero,
          gerente,
          coordenador,
          equipe,
          status,
          proposta,
          departamento,
          previsao,
          nproc_origem,
          valor,
          memoalt,
          dt_fim,
          cod_proj} = request.body;

        const indexProj = new CreateProjetosServices();

        const showPorIndex = await indexProj.execute({uuidprojeto,data,contrato,nprojeto,projeto,cliente,cliente2, 
          numero,
          gerente,
          coordenador,
          equipe,
          status,
          proposta,
          departamento,
          previsao,
          nproc_origem,
          valor,
          memoalt,
          dt_fim,
          cod_proj});

 

        return response.json(showPorIndex);
      }



  }




