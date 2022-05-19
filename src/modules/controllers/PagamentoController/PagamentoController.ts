import { Request, Response } from 'express';
import CreatePagamentoServices from '../../services/Pagamento/Pagamento/CreatePagamentoServices';
import UpdatePagamentoServices from '../../services/Pagamento/Pagamento/UpdatePagamentoServices';
import DeletePagamentoServices from '../../services/Pagamento/Pagamento/DeletePagamentoServices';
import LoadIndexService  from '../../services/Pagamento/PagamentoView/LoadIndexService';
import { container } from "tsyringe";


export default class CargoController {

      //Criação Cargo
      public async create(request: Request, response: Response): Promise<Response>{

        const {

          uuidpagamento,
          empresa,
          uuidprojeto,
          uuidn1,
          uuidn2,
          uuidn3,
          uuidcolab_forne,
          valor_pago,
          data_pagto,
          data_vecto,
          uuidbancos,
          incidencia,
          parcelas_n,
          n_doc_pagto,
          uuidformapagto,
          sttpguuid,
          obs,linha} = request.body;

        const service = container.resolve( CreatePagamentoServices);

        const result = await service.execute(
          {
            

        uuidpagamento,
        empresa,
        uuidprojeto,
        uuidn1,
        uuidn2,
        uuidn3,
        uuidcolab_forne,
        valor_pago,
        data_pagto,
        data_vecto,
        uuidbancos,
        incidencia,
        parcelas_n,
        n_doc_pagto,
        uuidformapagto,
        sttpguuid,
        obs,linha
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

        const {

          empresa,
          uuidprojeto,
          uuidn1,
          uuidn2,
          uuidn3,
          uuidcolab_forne,
          valor_pago,
          data_pagto,
          data_vecto,
          uuidbancos,
          incidencia,
          parcelas_n,
          n_doc_pagto,
          uuidformapagto,
          sttpguuid,
          obs,linha} = request.body

        const updateFatu = container.resolve( UpdatePagamentoServices)

        const fatura = await updateFatu.update(

          {
            

        uuidpagamento,
        empresa,
        uuidprojeto,
        uuidn1,
        uuidn2,
        uuidn3,
        uuidcolab_forne,
        valor_pago,
        data_pagto,
        data_vecto,
        uuidbancos,
        incidencia,
        parcelas_n,
        n_doc_pagto,
        uuidformapagto,
        sttpguuid,
        obs,linha}

        )

        return response.json(fatura);



      }

    
      public async delete(request:Request, response:Response):Promise<Response>{

        const {uuidpagamento} = request.params;

        const deleteCargo = container.resolve( DeletePagamentoServices );

        await deleteCargo.execute({uuidpagamento});

        return response.json('Delete realizado com sucesso');
      }

      public async index(request: Request, response: Response): Promise<Response> {

        const {uuidpagamento} = request.params
    
        const loadFuncao = container.resolve( LoadIndexService)
    
        const funcao = await loadFuncao.index({uuidpagamento});
    
        return response.json(funcao);
    
      }
    
    
  }




