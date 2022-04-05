import { Request, Response } from 'express';
import CreateClientesServices from '../../services/Clientes/CreateClientesServices';
import UpdateClientesServices from '../../services/Clientes/UpdateClientesServices';
import LoadSummyService  from '../../services/Clientes/LoadSummyService';
import DeleteClientesServices from '@modules/services/Clientes/DeleteClientesServices';




export default class CargoController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao);

  }

      //Criação Cargo
      public async create(request: Request, response: Response): Promise<Response>{

        const { id,projeto,cliente} = request.body;

        const service = new CreateClientesServices();

        const result = await service.execute(
          {
            id,projeto,cliente                

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {id} = request.params

        const {projeto,cliente} = request.body

        const updateFatu = new UpdateClientesServices();

        const fatura = await updateFatu.update(

          {
            id,projeto,cliente
          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {id} = request.params;

        const deleteCargo = new DeleteClientesServices();

       deleteCargo.execute({id});

        return response.json('Delete realizado com sucesso');
      }


    
  }




