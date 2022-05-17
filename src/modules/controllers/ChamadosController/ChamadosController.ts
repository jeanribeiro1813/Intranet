import { Request, Response } from 'express';
import CreateChamadosServices from '../../services/Chamados/Chamados/CreateChamadosServices';
import UpdateChamadosServices from '../../services/Chamados/Chamados/UpdateChamadosServices';
import LoadSummyService  from '../../services/Chamados/Chamados View/LoadSummyService';
import DeleteChamadosServices from '../../services/Chamados/Chamados/DeleteChamadosServices';
import { container } from "tsyringe";




export default class ChamadosController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = container.resolve(LoadSummyService);

    const funcao = await loadFuncao.summary();

    return response.json(funcao);

  }

      //Criação Cargo
      public async create(request: Request, response: Response): Promise<Response>{

        const { cod_chamado_uuid,cod_usuario, equipamento,descricao,prioridade,
          dt_solicitacao,dt_conclusao,desc_conclusao,cod_chamado} = request.body;

        const service = container.resolve(CreateChamadosServices);

        const result = await service.create(
          {
            cod_chamado_uuid,cod_usuario, equipamento,descricao,prioridade,
      dt_solicitacao,dt_conclusao,desc_conclusao,cod_chamado              

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {cod_chamado_uuid} = request.params

        const {cod_usuario, equipamento,descricao,prioridade,
          dt_solicitacao,dt_conclusao,desc_conclusao,cod_chamado} = request.body

        const updateFatu = container.resolve(UpdateChamadosServices)

        const fatura = await updateFatu.update(

          {
            cod_chamado_uuid,cod_usuario, equipamento,descricao,prioridade,
            dt_solicitacao,dt_conclusao,desc_conclusao,cod_chamado          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {cod_chamado_uuid} = request.params;

        const deleteCargo = container.resolve(DeleteChamadosServices)

       await deleteCargo.delete({cod_chamado_uuid});

        return response.json('Delete realizado com sucesso');
      }


    
  }




