import { Request, Response } from 'express';
import CreateClientesServices from '../../services/Clientes/Clientes/CreateClientesServices';
import UpdateClientesServices from '../../services/Clientes/Clientes/UpdateClientesServices';
import LoadSummyService  from '../../services/Clientes/Clientes_View/LoadSummyService';
import DeleteClientesServices from '../../services/Clientes/Clientes/DeleteClientesServices';
import { container } from "tsyringe";




export default class CargoController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = container.resolve(LoadSummyService)

    const funcao = await loadFuncao.summary();

    return response.json(funcao);

  }

      //Criação Cargo
      public async create(request: Request, response: Response): Promise<Response>{

        const { uuidcliente,projeto,cliente} = request.body;

        const service = container.resolve(CreateClientesServices)

        const result = await service.create(
          {
            uuidcliente,projeto,cliente                

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {uuidcliente} = request.params

        const {projeto,cliente} = request.body

        const updateFatu = container.resolve(UpdateClientesServices)

        const fatura = await updateFatu.update(

          {
            uuidcliente,projeto,cliente
          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {uuidcliente} = request.params;

        const deleteCargo = container.resolve(DeleteClientesServices)

        await deleteCargo.delete({uuidcliente});

        return response.json('Delete realizado com sucesso');
      }


    
  }




