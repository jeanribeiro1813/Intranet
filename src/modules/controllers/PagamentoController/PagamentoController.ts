import { Request, Response } from 'express';
import CreatePagamentoServices from '../../services/Pagamento/Pagamento/CreatePagamentoServices';
import UpdatePagamentoServices from '../../services/Pagamento/Pagamento/UpdatePagamentoServices';
import DeletePagamentoServices from '../../services/Pagamento/Pagamento/DeletePagamentoServices';
import { container } from "tsyringe";


export default class CargoController {

      //Criação Cargo
      public async create(request: Request, response: Response): Promise<Response>{

        const { uuidpagamento, empresa, uuidprojeto, n1, n2, n3, uuidcolab_forne, valor_pago,uuidcontrato
          ,data_pagto, data_vecto, uuidbancos, incidencia, parcelas_n, n_doc_pagto, uuidformapagto, status, obs} = request.body;

        const service = container.resolve( CreatePagamentoServices);

        const result = await service.execute(
          {
            uuidpagamento, empresa, uuidprojeto,n1, n2, n3, uuidcolab_forne, valor_pago,uuidcontrato
            ,data_pagto, data_vecto, uuidbancos, incidencia, parcelas_n, n_doc_pagto, uuidformapagto, status, obs
          }
        );

        if(result instanceof Error){
          return response.status(400).json(result.message);
     }

        return response.json(result);
      }

      // Upgrade

      public async update (request :Request, response:Response): Promise<Response>{

        const {uuidpagamento} = request.params

        const {empresa, uuidprojeto,  n1, n2, n3, uuidcolab_forne, valor_pago
          , data_pagto, data_vecto, uuidbancos, incidencia, parcelas_n, n_doc_pagto, uuidformapagto, status, obs} = request.body

        const updateFatu = container.resolve( UpdatePagamentoServices)

        const fatura = await updateFatu.update(

          {
            uuidpagamento, empresa, uuidprojeto, n1, n2, n3, uuidcolab_forne, valor_pago
            , data_pagto, data_vecto, uuidbancos, incidencia, parcelas_n, n_doc_pagto, uuidformapagto, status, obs          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {uuidpagamento} = request.params;

        const deleteCargo = container.resolve( DeletePagamentoServices );

       deleteCargo.execute({uuidpagamento});

        return response.json('Delete realizado com sucesso');
      }


    
  }




