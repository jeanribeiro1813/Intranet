import CreateProjetosServices from '../../services/Projetos/Projetos/CreateProjetosServices';
import { Request, Response } from 'express';
import UpdateProjetoServicets from '../../services/Projetos/Projetos/UpdateProjetoService'
import LoadIndexProjeServices  from '../../services/Projetos/ProjetosView/LoadIndexProjeServices';
import { container } from "tsyringe";



export default class ProjetosControllers {

 
    
      //Update
      public async update (request: Request , response: Response): Promise<Response>{

        const {uuidprojeto} = request.params

        const {contrato,data,nprojeto,projeto,cliente, cliente2,
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



        const updateService = container.resolve(  UpdateProjetoServicets );

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
        const {uuidprojeto,data,contrato,nprojeto,projeto,cliente, cliente2,
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

        const indexProj = container.resolve(  CreateProjetosServices );

        const showPorIndex = await indexProj.execute({uuidprojeto,data,contrato,nprojeto,projeto,cliente, cliente2,
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

      
      public async index(request: Request, response: Response): Promise< Response > {
      
        const {uuidprojeto} = request.params;

        const P = container.resolve(  LoadIndexProjeServices ) ;

        const projetos = await P.index({uuidprojeto});

        return response.json(projetos);

      }


  }




