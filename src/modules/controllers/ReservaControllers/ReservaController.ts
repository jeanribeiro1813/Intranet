import { Request, Response } from 'express';
import CreateReservaServices from '../../services/Reserva/Reserva/CreateReservaServices';
import UpdateReservaServices from '../../services/Reserva/Reserva/UpdateReservaServices';
import LoadSummyService  from '../../services/Paginas/Paginas_View/LoadSummyService';
import DeleteReservaServices from '../../services/Reserva/Reserva/DeleteReservaServices';




export default class ReservaController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao);

  }

      //Criação Atividade
      public async create(request: Request, response: Response): Promise<Response>{

        const {cod_reserva_uuid,placa,usuario,dt_saida,
          dt_chegada,dt_cancel,hora_saida,hora_chegada,km_saida,
          km_chegada,projeto,cancelado,desc_cancel,dev_obs,cod_reserva} = request.body;

        const service = new CreateReservaServices();

        const result = await service.create(

          {

            cod_reserva_uuid,placa,usuario,dt_saida,
          dt_chegada,dt_cancel,hora_saida,hora_chegada,km_saida,
            km_chegada,projeto,cancelado,desc_cancel,dev_obs,cod_reserva

          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {cod_reserva_uuid} = request.params

        const {placa,usuario,dt_saida,
          dt_chegada,dt_cancel,hora_saida,hora_chegada,km_saida,
            km_chegada,projeto,cancelado,desc_cancel,dev_obs,cod_reserva} = request.body

        const updateFatu = new UpdateReservaServices();

        const fatura = await updateFatu.update(

          {
            cod_reserva_uuid,placa,usuario,dt_saida,
            dt_chegada,dt_cancel,hora_saida,hora_chegada,km_saida,
              km_chegada,projeto,cancelado,desc_cancel,dev_obs,cod_reserva
          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {cod_reserva_uuid} = request.params;

        const deleteAtividade = new DeleteReservaServices();

       await deleteAtividade.delete({cod_reserva_uuid});

        return response.json('Delete realizado com sucesso');
      }


    
  }




