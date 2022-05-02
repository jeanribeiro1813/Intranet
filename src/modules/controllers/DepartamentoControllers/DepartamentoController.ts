import { Request, Response } from 'express';
import CreateClientesServices from '../../services/Departamento/CreateDepartamentoServices';
import UpdateClientesServices from '../../services/Departamento/UpdateDepartamentoServices';
import LoadSummyService  from '../../services/Departamento/LoadSummyService';
import DeleteClientesServices from '../../services/Departamento/DeleteDepartamentoServices';
import LoadIndexDepartamentoServices from '../../services/Departamento/LoadIndexDepartamentoServices';




export default class DepartamentoController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao.summary);

  }

      //Criação Departamento
      public async create(request: Request, response: Response): Promise<Response>{

        const { uuiddeparta,departamento} = request.body;

        const service = new CreateClientesServices();

        const result = await service.execute(
          {
            uuiddeparta,departamento                

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const { uuiddeparta} = request.params

        const { departamento} = request.body

        const updateFatu = new UpdateClientesServices();

        const fatura = await updateFatu.update(

          {
            uuiddeparta,departamento
          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const { uuiddeparta} = request.params;

        const deleteDepartamento = new DeleteClientesServices();

       deleteDepartamento.execute({uuiddeparta});

        return response.json('Delete realizado com sucesso');
      }

      public async index(request:Request, response:Response):Promise<Response>{

        const { uuiddeparta } = request.params;

        const indexDepartamento = new LoadIndexDepartamentoServices();

        const result = await indexDepartamento.index({uuiddeparta});

        return response.json(result);
      }

    
  }




