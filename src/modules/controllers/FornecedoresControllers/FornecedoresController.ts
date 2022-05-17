import { Request, Response } from 'express';
import CreateFornecedoresServices from '../../services/Fornecedores/Fornecedores/CreateFornecedoresServices';
import UpdateFornecedoresServices from '../../services/Fornecedores/Fornecedores/UpdateFornecedoresServices';
import LoadSummyService  from '../../services/Fornecedores/Fornecedores_View/LoadSummyService';
import DeleteFornecedoresServices from '../../services/Fornecedores/Fornecedores/DeleteFornecedoresServices';
import { container } from "tsyringe";



export default class FornecedoresController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = container.resolve(LoadSummyService)

    const funcao = await loadFuncao.summary();

    return response.json(funcao);

  }

      //Criação Atividade
      public async create(request: Request, response: Response): Promise<Response>{

        const {uuidusuario,usuario,tp_doc,cpf_cnpj,email,contato,contato2,cargo,status,avatar } = request.body;

        const service = container.resolve(CreateFornecedoresServices)

        const result = await service.create(
          {
            uuidusuario,usuario,tp_doc,cpf_cnpj,email,contato,contato2,cargo,status,avatar
          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json('Criação Realizada com sucesso');
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {uuidusuario} = request.params

        const {usuario,tp_doc,cpf_cnpj,email,contato,contato2,cargo,status,avatar} = request.body

        const updateForne = container.resolve(UpdateFornecedoresServices)

        const fornecedor = await updateForne.update(

          {
            uuidusuario, usuario,tp_doc,cpf_cnpj,email,contato,contato2,cargo,status,avatar
                   }

        )

        return response.json('Atualização realizada com sucesso');



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {uuidusuario} = request.params;

        const deleteFornecedores = container.resolve(DeleteFornecedoresServices);

       await deleteFornecedores.delete({uuidusuario});

        return response.json('Delete realizado com sucesso');
      }


    
  }




