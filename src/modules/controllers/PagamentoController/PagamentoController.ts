import { Request, Response } from 'express';
import CreatePagamentoServices from '../../services/Pagamento/CreatePagamentoServices';
import UpdatePagamentoServices from '../../services/Pagamento/UpdatePagamentoServices';
import LoadSummyService  from '../../services/Pagamento/LoadSummyService';
import DeletePagamentoServices from '@modules/services/Pagamento/DeletePagamentoServices';




export default class CargoController {

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadSummyService();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao.summary);

  }

      //Criação Cargo
      public async create(request: Request, response: Response): Promise<Response>{

        const { uuidpagamento,uuidcliente,empresa,uuiddeparta , uuidprojeto,uuidcontrato ,uuidcontabn1 ,uuidgrupon2 ,uuidsubgrupon3 ,uuidcolab_forne , valor_pago
          ,data_pagto , data_vecto,uuidbancos ,incidencia ,parcelas_n ,n_doc_pagto , uuidformapagto ,status ,obs} = request.body;

        const service = new CreatePagamentoServices();

        const result = await service.execute(
          {
            uuidpagamento,uuidcliente,empresa,uuiddeparta , uuidprojeto,uuidcontrato ,uuidcontabn1 ,uuidgrupon2 ,uuidsubgrupon3 ,uuidcolab_forne , valor_pago
            ,data_pagto , data_vecto,uuidbancos ,incidencia ,parcelas_n ,n_doc_pagto , uuidformapagto ,status ,obs
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

        const {uuidcliente,empresa,uuiddeparta , uuidprojeto,uuidcontrato ,uuidcontabn1 ,uuidgrupon2 ,uuidsubgrupon3 ,uuidcolab_forne , valor_pago
          ,data_pagto , data_vecto,uuidbancos ,incidencia ,parcelas_n ,n_doc_pagto , uuidformapagto ,status ,obs} = request.body

        const updateFatu = new UpdatePagamentoServices();

        const fatura = await updateFatu.update(

          {
            uuidpagamento,uuidcliente,empresa,uuiddeparta , uuidprojeto,uuidcontrato ,uuidcontabn1 ,uuidgrupon2 ,uuidsubgrupon3 ,uuidcolab_forne , valor_pago
            ,data_pagto , data_vecto,uuidbancos ,incidencia ,parcelas_n ,n_doc_pagto , uuidformapagto ,status ,obs          }

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {uuidpagamento} = request.params;

        const deleteCargo = new DeletePagamentoServices();

       deleteCargo.execute({uuidpagamento});

        return response.json('Delete realizado com sucesso');
      }


    
  }




