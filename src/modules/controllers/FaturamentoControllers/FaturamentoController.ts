import { Request, Response } from 'express';

import LoadIndexService from '@modules/services/Faturamento/Faturamento/LoadIndexServices';
import CreateFaturamentoServices from '@modules/services/Faturamento/Faturamento/CreateFaturamentoServices';
import UpdateFaturamentoServes from '@modules/services/Faturamento/Faturamento/UpdateFaturamentoServices';
import DeleteFaturamentoService from '@modules/services/Faturamento/Faturamento/DeleteServices';
import UpdateFaturamentoStatus  from '@modules/services/Faturamento/Faturamento/UpdateFaturamentoStatus';


export default class FaturamentoController {

      public async loading (request: Request , response: Response){

        const {uuidfat} = request.params;

        const loadingService = new LoadIndexService();

        const result = await loadingService.load({uuidfat});


        return response.json(result);

      }  

      //Criação Faturamento
      public async create(request: Request, response: Response): Promise<Response>{

        const {uuidfat, uuidusuario, uuidprojeto, uuidatividade, data, inicio, fim, status, obs, empresa} = request.body;

        const service = new CreateFaturamentoServices();

        const result = await service.execute(
          {
            uuidfat, uuidusuario, uuidprojeto, uuidatividade, data, inicio, fim, status, obs, empresa

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json('Criado com sucesso');
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {uuidfat} = request.params

        const {uuidusuario, uuidprojeto,uuidatividade,data,inicio,fim,status,obs,empresa} = request.body

        const updateFatu = new UpdateFaturamentoServes();

        const fatura = await updateFatu.update(

          {
            uuidfat,uuidusuario, uuidprojeto,uuidatividade,data,inicio,fim,status,obs,empresa
          }

        )

        return response.json('Atualizado com sucesso');



      }

      public async delete(request:Request, response:Response):Promise<Response>{

        const {uuidfat} = request.params;

        const deleteFaturamento = new DeleteFaturamentoService();

        const deletePorIndex = deleteFaturamento.execute({uuidfat});

        return response.json('Deletado com sucesso');
      }


      public async updateStatus(request: Request, response: Response): Promise< Response > {

        const {uuidusuario, uuidprojeto, data, status} = request.body;

        const indexFat = new UpdateFaturamentoStatus();

        const showPorIndex = await indexFat.executeStatus({uuidusuario, uuidprojeto, data, status});

        
      
        return response.json(showPorIndex);
      }
    
  }




