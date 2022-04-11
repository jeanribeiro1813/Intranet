import CreateProjetosServices from '@modules/services/Projetos/CreateProjetosServices';
import LoadProjeto from '@modules/services/Projetos/LoadProjeto';
import { Request, Response } from 'express';
import LoadProjetosService from '../../services/Projetos/LoadProjetosServices';
import LoadProjetoSummaryService  from '../../services/Projetos/LoadySummaryProjeServices';
import UpdateProjetoServicets from '../../services/Projetos/UpdateProjetoService'




export default class ProjetosControllers {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadProjetoSummaryService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao);

  }

      //Loading

      public async loading (request: Request , response: Response){

        const {status} = request.body;

        const loadingService = new LoadProjetosService();

        const result = await loadingService.load({status});

        return response.json(result);

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


      //Load por nprojeto , contrato
      public async loadProjeto(request: Request, response: Response): Promise< Response > {
        
        const {nprojeto,contrato} = request.body;

        const indexFat = new LoadProjeto();

        const showPorIndex = await indexFat.loadProjetos({nprojeto,contrato});

        return response.json(showPorIndex);

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




