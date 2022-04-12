import { Request, Response } from 'express';
import CreateReservaServices from '../../services/Reserva/CreateReservaServices';
import UpdateReservaServices from '../../services/Reserva/UpdateReservaServices';
import LoadSummyService  from '../../services/Paginas/LoadSummyService';
import DeleteReservaServices from '@modules/services/Reserva/DeleteReservaServices';




export default class ReservaController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao.summary);

  }

      //Criação Atividade
      public async create(request: Request, response: Response): Promise<Response>{

        const {cod_reserva_uuid,placa,usuario,dt_saida,
          dt_chegada,hora_saida,hora_chegada,km_saida,
          km_chegada,projeto,cancelado,desc_cancel,dev_obs,cod_reserva} = request.body;

        const service = new CreateReservaServices();

        const result = await service.execute(

          {

            cod_reserva_uuid,placa,usuario,dt_saida,
            dt_chegada,hora_saida,hora_chegada,km_saida,
            km_chegada,projeto,cancelado,desc_cancel,dev_obs,cod_reserva

          }\
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {cod_page_uuid} = request.params

        const {pagina,descricao,banner,cod_page} = request.body

        const updateFatu = new UpdateReservaServices();

        const fatura = await updateFatu.update(

          {
            cod_page_uuid,pagina,descricao,banner,cod_page
          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {cod_page_uuid} = request.params;

        const deleteAtividade = new DeleteReservaServices();

       deleteAtividade.execute({cod_page_uuid});

        return response.json('Delete realizado com sucesso');
      }


    
  }




