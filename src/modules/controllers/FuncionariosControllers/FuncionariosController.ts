import { Request, Response } from 'express';
import CreateFuncionariosServices from '../../services/Funcionarios/Funcionarios/CreateFuncionariosServices';
import UpdateFuncionarioServices from '../../services/Funcionarios/Funcionarios/UpdateFuncionarioServices';
import LoadSummyService  from '../../services/Funcionarios/Funcionarios_View/LoadSummyService';
import DeleteFuncionariosServices from '../../services/Funcionarios/Funcionarios/DeleteFuncionariosServices';




export default class FuncionariosController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao.summary);

  }

      //Criação Atividade
      public async create(request: Request, response: Response): Promise<Response>{

        const {cod_func_uuid,cod_cargo,cod_usuario,cod_func } = request.body;

        const service = new CreateFuncionariosServices();

        const result = await service.create(
          {
            cod_func_uuid,cod_cargo,cod_usuario,cod_func         

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {cod_func_uuid} = request.params

        const {cod_cargo,cod_usuario,cod_func} = request.body

        const updateFatu = new UpdateFuncionarioServices();

        const fatura = await updateFatu.update(

          {
            cod_func_uuid,cod_cargo,cod_usuario,cod_func
          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {cod_func_uuid} = request.params;

        const deleteAtividade = new DeleteFuncionariosServices();

       deleteAtividade.delete({cod_func_uuid});

        return response.json('Delete realizado com sucesso');
      }


    
  }




