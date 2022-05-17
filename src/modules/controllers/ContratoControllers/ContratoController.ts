import { Request, Response } from 'express';
import CreateContratoServices from '../../services/Contrato/Contrato/CreateContratoServices';
import UpdateContratoServices from '../../services/Contrato/Contrato/UpdateContratoServices';
import LoadSummyService  from '../../services/Contrato/Contrato View/LoadSummyService';
import DeleteContratoServices from '../../services/Contrato/Contrato/DeleteContratoServices';
import { container } from "tsyringe";




export default class ContratoController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = container.resolve(LoadSummyService)

    const funcao = await loadFuncao.summary();

    return response.json(funcao);

  }

      //Criação Atividade
      public async create(request: Request, response: Response): Promise<Response>{

        const {uuidcontrato,contrato } = request.body;

        const service = container.resolve(CreateContratoServices)

        const result = await service.create(
          {
            uuidcontrato,contrato               

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {uuidcontrato} = request.params

        const {contrato } = request.body

        const updateFatu = container.resolve(UpdateContratoServices)

        const fatura = await updateFatu.update(

          {
            uuidcontrato,contrato
          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {uuidcontrato} = request.params;

        const deleteAtividade = container.resolve(DeleteContratoServices)

       await deleteAtividade.delete({uuidcontrato});

        return response.json('Delete realizado com sucesso');
      }


    
  }




