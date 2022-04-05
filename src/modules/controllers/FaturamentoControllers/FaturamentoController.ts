import { Request, Response } from 'express';
import CreateFaturamentoServicer from '../../services/Faturamento/Faturamento/CreateFaturamentoServices';
import UpdateFaturamentoServes from '../../services/Faturamento/Faturamento/UpdateFaturamentoServices';
import DeleteFaturamentoService from '@modules/services/Faturamento/Faturamento/DeleteServices';
import UpdateFaturamentoStatus  from '@modules/services/Faturamento/Faturamento/UpdateFaturamentoStatus'



export default class FaturamentoController {

      //Criação Faturamento
      public async create(request: Request, response: Response): Promise<Response>{

        const {codfat,codusuario, coddeparta, codprojeto,contrato,codativida,data,inicio,fim,status,obs} = request.body;

        const service = new CreateFaturamentoServicer();

        const result = await service.execute(
          {
            codfat,codusuario, coddeparta, codprojeto,contrato,codativida,data,inicio,fim,status,obs

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {codfat} = request.params

        const {codusuario, coddeparta, codprojeto,contrato,codativida,data,inicio,fim,status,obs} = request.body

        const updateFatu = new UpdateFaturamentoServes();

        const fatura = await updateFatu.update(

          {
            codfat,codusuario, coddeparta, codprojeto,contrato,codativida,data,inicio,fim,status,obs
          }

        )

        return response.json(fatura);



      }

      public async delete(request:Request, response:Response):Promise<Response>{

        const {codfat} = request.params;

        const deleteFaturamento = new DeleteFaturamentoService();

        const deletePorIndex = deleteFaturamento.execute({codfat});

        return response.json('Delete realizado com sucesso');
      }


      public async updateStatus(request: Request, response: Response): Promise< Response > {

        const { codfat,codusuario,coddeparta,codprojeto,codativida,contrato,data,inicio,fim,status,obs} = request.body;

        const indexFat = new UpdateFaturamentoStatus();

        const showPorIndex = await indexFat.executeStatus({codfat,codusuario,coddeparta,codprojeto,codativida,contrato,data,inicio,fim,status,obs});

      
        return response.json(showPorIndex);
      }
    
  }




