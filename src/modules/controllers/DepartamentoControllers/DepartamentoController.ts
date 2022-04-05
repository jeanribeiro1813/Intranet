import { Request, Response } from 'express';
import CreateClientesServices from '../../services/Departamento/CreateDepartamentoServices';
import UpdateClientesServices from '../../services/Departamento/UpdateDepartamentoServices';
import LoadSummyService  from '../../services/Departamento/LoadSummyService';
import DeleteClientesServices from '@modules/services/Departamento/DeleteDepartamentoServices';




export default class DepartamentoController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao);

  }

      //Criação Departamento
      public async create(request: Request, response: Response): Promise<Response>{

        const { coddeparta,departamento} = request.body;

        const service = new CreateClientesServices();

        const result = await service.execute(
          {
            coddeparta,departamento                

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const { coddeparta} = request.params

        const { departamento} = request.body

        const updateFatu = new UpdateClientesServices();

        const fatura = await updateFatu.update(

          {
            coddeparta,departamento
          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const { coddeparta} = request.params;

        const deleteDepartamento = new DeleteClientesServices();

       deleteDepartamento.execute({coddeparta});

        return response.json('Delete realizado com sucesso');
      }


    
  }




