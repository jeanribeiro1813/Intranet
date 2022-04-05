import { Request, Response } from 'express';
import CreateClientesServices from '../../services/Atividade/CreateAtividadeServices';
import UpdateClientesServices from '../../services/Atividade/UpdateAtividadeServices';
import LoadSummyService  from '../../services/Atividade/LoadSummyService';
import DeleteClientesServices from '@modules/services/Atividade/DeleteAtividadeServices';




export default class AtividadeController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao);

  }

      //Criação Atividade
      public async create(request: Request, response: Response): Promise<Response>{

        const {codativida,atividade } = request.body;

        const service = new CreateClientesServices();

        const result = await service.execute(
          {
            codativida,atividade                

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {codativida} = request.params

        const {atividade    } = request.body

        const updateFatu = new UpdateClientesServices();

        const fatura = await updateFatu.update(

          {
            codativida,atividade
          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {codativida} = request.params;

        const deleteAtividade = new DeleteClientesServices();

       deleteAtividade.execute({codativida});

        return response.json('Delete realizado com sucesso');
      }


    
  }




