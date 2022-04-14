import { Request, Response } from 'express';
import CreatePagamentoServices from '../../services/Pagamento/Pagamento/CreatePagamentoServices';
import UpdatePagamentoServices from '../../services/Pagamento/Pagamento/UpdatePagamentoServices';
import DeletePagamentoServices from '@modules/services/Pagamento/Pagamento/DeletePagamentoServices';


export default class CargoController {

      //Criação Cargo
      public async create(request: Request, response: Response): Promise<Response>{

        const { uuidpagamento, empresa, uuidprojeto, n1, n2, n3, uuidcolab_forne, valor_pago
          ,data_pagto, data_vecto, uuidbancos, incidencia, parcelas_n, n_doc_pagto, uuidformapagto, status, obs} = request.body;

        const service = new CreatePagamentoServices();

        const result = await service.execute(
          {
            uuidpagamento, empresa, uuidprojeto, n1, n2, n3, uuidcolab_forne, valor_pago
            ,data_pagto, data_vecto, uuidbancos, incidencia, parcelas_n, n_doc_pagto, uuidformapagto, status, obs
          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json('Criado com sucesso');
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {uuidpagamento} = request.params

        const {empresa, uuidprojeto,  n1, n2, n3, uuidcolab_forne, valor_pago
          , data_pagto, data_vecto, uuidbancos, incidencia, parcelas_n, n_doc_pagto, uuidformapagto, status, obs} = request.body

        const updateFatu = new UpdatePagamentoServices();

        const fatura = await updateFatu.update(

          {
            uuidpagamento, empresa, uuidprojeto, n1, n2, n3, uuidcolab_forne, valor_pago
            , data_pagto, data_vecto, uuidbancos, incidencia, parcelas_n, n_doc_pagto, uuidformapagto, status, obs          }

        )

        return response.json('Atualizado com sucesso');



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {uuidpagamento} = request.params;

        const deleteCargo = new DeletePagamentoServices();

       deleteCargo.execute({uuidpagamento});

        return response.json('Delete realizado com sucesso');
      }


    
  }




