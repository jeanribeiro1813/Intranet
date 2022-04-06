import CreateProjetosServices from '@modules/services/Projetos/CreateProjetosServices';
import LoadProjetoContrato from '@modules/services/Projetos/LoadProjetoContratoParado';
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


      //Load por Contrato , CO e Status
      public async loadProjetos(request: Request, response: Response): Promise< Response > {
        const {contrato,co,status} = request.body;

        const indexFat = new LoadProjetoContrato();

        const showPorIndex = await indexFat.loadProjetos({contrato,co,status});

 

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




