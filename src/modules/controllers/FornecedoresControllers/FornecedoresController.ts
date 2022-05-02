import { Request, Response } from 'express';
import CreateFornecedoresServices from '../../services/Fornecedores/CreateFornecedoresServices';
import UpdateFornecedoresServices from '../../services/Fornecedores/UpdateFornecedoresServices';
import LoadSummyService  from '../../services/Fornecedores/LoadSummyService';
import DeleteFornecedoresServices from '../../services/Fornecedores/DeleteFornecedoresServices';




export default class FornecedoresController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao.summary);

  }

      //Criação Atividade
      public async create(request: Request, response: Response): Promise<Response>{

        const {uuidusuario,usuario,tp_doc,cpf_cnpj,email,contato,contato2,cargo,status,avatar } = request.body;

        const service = new CreateFornecedoresServices();

        const result = await service.execute(
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

        const updateForne = new UpdateFornecedoresServices();

        const fornecedor = await updateForne.update(

          {
            uuidusuario, usuario,tp_doc,cpf_cnpj,email,contato,contato2,cargo,status,avatar
                   }

        )

        return response.json('Atualização realizada com sucesso');



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {uuidusuario} = request.params;

        const deleteFornecedores = new DeleteFornecedoresServices();

       deleteFornecedores.execute({uuidusuario});

        return response.json('Delete realizado com sucesso');
      }


    
  }




