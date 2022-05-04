import { Request, Response } from 'express';

import LoadIndexService from '../../services/Faturamento/FaturamentoView/LoadIndexServices';
import CreateFaturamentoServices from '../../services/Faturamento/Faturamento/CreateFaturamentoServices';
import UpdateFaturamentoServes from '../../services/Faturamento/Faturamento/UpdateFaturamentoServices';
import DeleteFaturamentoService from '../../services/Faturamento/Faturamento/DeleteServices';
import UpdateFaturamentoStatus  from '../../services/Faturamento/Faturamento/UpdateFaturamentoStatus';


export default class FaturamentoController {

      public async loading (request: Request , response: Response){

        const {uuidfat} = request.params;

        const loadingService = new LoadIndexService();

        const result = await loadingService.index({uuidfat});


        return response.json(result);

      }  

      //Criação Faturamento
      public async create(request: Request, response: Response): Promise<Response>{

        const {uuidfat, uuidusuario, uuidprojeto, uuidatividade, data, inicio, fim, status, obs, empresa} = request.body;

        const service = new CreateFaturamentoServices();

        const result = await service.create(
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

        const deletePorIndex = deleteFaturamento.delete({uuidfat});

        return response.json('Deletado com sucesso');
      }


      public async updateStatus(request: Request, response: Response): Promise< Response > {

        const {uuidusuario, uuidprojeto, data, status} = request.body;

        const indexFat = new UpdateFaturamentoStatus();

        const showPorIndex = await indexFat.updateStatus({uuidusuario, uuidprojeto, data, status});

        
      
        return response.json(showPorIndex);
      }
    
  }




