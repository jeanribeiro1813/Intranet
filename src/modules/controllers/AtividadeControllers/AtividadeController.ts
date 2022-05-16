import { Request, Response } from 'express';
import CreateClientesServices from '../../services/Atividade/Atividades/CreateAtividadeServices';
import UpdateClientesServices from '../../services/Atividade/Atividades/UpdateAtividadeServices';
import LoadSummyService  from '../../services/Atividade/Atividades_Views/LoadSummyService';
import DeleteClientesServices from '../../services/Atividade/Atividades/DeleteAtividadeServices';
import LoadIndexService from '../../services/Atividade/Atividades_Views/LoadIndexService';
import { container } from "tsyringe";




export default class AtividadeController {

  public async execute(request: Request, response: Response): Promise<Response> {
    
    const loadFuncao = container.resolve(LoadSummyService)

    const funcao = await loadFuncao.summary();

    return response.json(funcao);

  }

      //Criação Atividade
      public async create(request: Request, response: Response): Promise<Response>{

        const {uuidatividade,atividade,cod_atv } = request.body;

        const service = container.resolve(CreateClientesServices);

        const result = await service.create(
          {
            uuidatividade,atividade,cod_atv

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {uuidatividade} = request.params

        const {atividade,cod_atv} = request.body

        const updateFatu = container.resolve(UpdateClientesServices);

        const fatura = await updateFatu.update(

          {
            uuidatividade,atividade,cod_atv
          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {uuidatividade} = request.params;

        const deleteAtividade = container.resolve(DeleteClientesServices);

       deleteAtividade.delete({uuidatividade});

        return response.json('Delete realizado com sucesso');
      }


      public async index(request:Request, response:Response):Promise<Response>{

        const {uuidatividade} = request.params;

        const indexAtividade = container.resolve(LoadIndexService);

        const result = await indexAtividade.index({uuidatividade});

        return response.json(result);
      }



    
  }




