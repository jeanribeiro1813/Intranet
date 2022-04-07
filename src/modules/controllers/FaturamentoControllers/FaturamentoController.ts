import { Request, Response } from 'express';
import CreateFaturamentoServicer from '../../services/Faturamento/Faturamento/CreateFaturamentoServices';
import UpdateFaturamentoServes from '../../services/Faturamento/Faturamento/UpdateFaturamentoServices';
import DeleteFaturamentoService from '@modules/services/Faturamento/Faturamento/DeleteServices';
import UpdateFaturamentoStatus  from '@modules/services/Faturamento/Faturamento/UpdateFaturamentoStatus'



export default class FaturamentoController {

      //Criação Faturamento
      public async create(request: Request, response: Response): Promise<Response>{

        const {uuidfat,uuidusuario, uuiddeparta, uuidprojeto,uuidcontrato,uuidatividade,data,inicio,fim,status,obs,empresa,uuidcliente} = request.body;

        const service = new CreateFaturamentoServicer();

        const result = await service.execute(
          {
            uuidfat,uuidusuario, uuiddeparta, uuidprojeto,uuidcontrato,uuidatividade,data,inicio,fim,status,obs,empresa,uuidcliente

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {uuidfat} = request.params

        const {uuidusuario, uuiddeparta, uuidprojeto,uuidcontrato,uuidatividade,data,inicio,fim,status,obs,empresa,uuidcliente} = request.body

        const updateFatu = new UpdateFaturamentoServes();

        const fatura = await updateFatu.update(

          {
            uuidfat,uuidusuario, uuiddeparta, uuidprojeto,uuidcontrato,uuidatividade,data,inicio,fim,status,obs,empresa,uuidcliente
          }

        )

        return response.json(fatura);



      }

      public async delete(request:Request, response:Response):Promise<Response>{

        const {uuidfat} = request.params;

        const deleteFaturamento = new DeleteFaturamentoService();

        const deletePorIndex = deleteFaturamento.execute({uuidfat});

        return response.json('Deletado com sucesso');
      }


      public async updateStatus(request: Request, response: Response): Promise< Response > {

        const {uuidfat,uuidusuario, uuiddeparta, uuidprojeto,uuidcontrato,uuidatividade,data,inicio,fim,status,obs,empresa,uuidcliente} = request.body;

        const indexFat = new UpdateFaturamentoStatus();

        const showPorIndex = await indexFat.executeStatus({uuidfat,uuidusuario, uuiddeparta, uuidprojeto,uuidcontrato,uuidatividade,data,inicio,fim,status,obs,empresa,uuidcliente
        });

        
      
        return response.json(showPorIndex);
      }
    
  }



