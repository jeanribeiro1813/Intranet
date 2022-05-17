import { Request, Response } from 'express';
import CreateClientesServices from '../../services/Departamento/Departamento/CreateDepartamentoServices';
import UpdateClientesServices from '../../services/Departamento/Departamento/UpdateDepartamentoServices';
import LoadSummyService  from '../../services/Departamento/Departamento_View/LoadSummyService';
import DeleteClientesServices from '../../services/Departamento/Departamento/DeleteDepartamentoServices';
import LoadIndexDepartamentoServices from '../../services/Departamento/Departamento_View/LoadIndexDepartamentoServices';
import { container } from "tsyringe";




export default class DepartamentoController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = container.resolve(LoadSummyService)

    const funcao = await loadFuncao.summary();

    return response.json(funcao);

  }

      //Criação Departamento
      public async create(request: Request, response: Response): Promise<Response>{

        const { uuiddeparta,departamento} = request.body;

        const service = container.resolve(CreateClientesServices)

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

        const updateFatu = container.resolve(UpdateClientesServices)

        const fatura = await updateFatu.update(

          {
            uuiddeparta,departamento
          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const { uuiddeparta} = request.params;

        const deleteDepartamento = container.resolve(DeleteClientesServices)

       deleteDepartamento.execute({uuiddeparta});

        return response.json('Delete realizado com sucesso');
      }

      public async index(request:Request, response:Response):Promise<Response>{

        const { uuiddeparta } = request.params;

        const indexDepartamento = container.resolve(LoadIndexDepartamentoServices)

        const result = await indexDepartamento.index({uuiddeparta});

        return response.json(result);
      }

    
  }




