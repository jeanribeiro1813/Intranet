import { Request, Response } from 'express';
import CreateFaturamentoServicer from '../../services/Faturamento/CreateFaturamentoServices';
import UpdateFaturamentoServes from '../../services/Faturamento/UpdateFaturamentoServices';
import LoadSummyService  from '../../services/Faturamento/LoadSummyService';
import LoadIndexServices from '../../services/Faturamento/LoadIndexServices';
import DeleteFaturamentoService from '@modules/services/Faturamento/DeleteServices';
import LoadPorUsersServices from '../../services/Faturamento/LoadPorUsuario';



export default class FaturamentoController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao);

  }

      //Criação Faturamento
      public async create(request: Request, response: Response): Promise<Response>{

        const {cod_fat,usuario, departamento, cod_proj,nome_proj, contrato, atividade, data_,inicio,fim,status,obs} = request.body;

        const service = new CreateFaturamentoServicer();

        const result = await service.execute(
          {
            cod_fat,
            usuario,
             departamento,
              cod_proj,
              nome_proj,
               contrato,
                atividade,
                data_,
                inicio,
                fim,
                status,
                obs
                

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {cod_fat} = request.params

        const {usuario, departamento, cod_proj, nome_proj ,contrato,atividade,data_,inicio,fim,status,obs} = request.body

        const updateFatu = new UpdateFaturamentoServes();

        const fatura = await updateFatu.update(

          {
            cod_fat,usuario,departamento, cod_proj, nome_proj , contrato, atividade,data_, inicio, fim,status,obs
          }

        )

        return response.json(fatura);



      }

      public async exibir (request: Request, response:Response): Promise<Response>{

        const {cod_fat} = request.params;

        const indexFat = new LoadIndexServices();

        const showPerIndex = await indexFat.execute({cod_fat});

        return response.json(showPerIndex);


      }

      public async delete(request:Request, response:Response):Promise<Response>{

        const {cod_fat} = request.params;

        const deleteFaturamento = new DeleteFaturamentoService();

        const deletePorIndex = deleteFaturamento.execute({cod_fat});

        return response.json('Delete realizado com sucesso');
      }


      public async execuUsers(request: Request, response: Response): Promise< Response > {
        const {usuario,mes} = request.body;

        const indexFat = new LoadPorUsersServices();

        const showPorIndex = await indexFat.execute({usuario,mes});

        console.log(showPorIndex)

        return response.json(showPorIndex);
      }
    
  }




