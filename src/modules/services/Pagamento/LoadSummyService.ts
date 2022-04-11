import { getCustomRepository } from "typeorm";
import Pagamento from '../../typeorm/entities/Pagamento';
import PagamentoRepository from '../../typeorm/repositories/PagamentoRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    uuidpagamento: string;
    uuidcliente:string;
    empresa: string;
    uuiddeparta: string;  
    uuidprojeto:string;
    uuidcontrato: string;
    uuidcontabn1: string;
    uuidgrupon2:string;
    uuidsubgrupon3: string;
    uuidcolab_forne: string;
    cpf_cnpj: string;
    valor_pago:string;
    data_pagto: string;
    data_vecto: string;
    uuidbancos:string;
    incidencia: string;
    parcelas_n: string;
    n_doc_pagto: string;  
    uuidformapagto:string;
    status: string;
    obs: string;
  

}





class LoadPagamentoSummaryService{
    public async executeDes (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(PagamentoRepository);

        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                

                uuidpagamento:use.uuidpagamento,
                uuidcliente:use.uuidcliente,
                empresa:use.empresa,
                uuiddeparta:use.uuiddeparta,
                uuidprojeto:use.uuidprojeto,
                uuidcontrato:use.uuidcontrato,
                uuidcontabn1:use.uuidcontabn1,
                uuidgrupon2:use.uuidgrupon2,
                uuidsubgrupon3:use.uuidsubgrupon3,
                uuidcolab_forne:use.uuidcolab_forne,
                cpf_cnpj:use.cpf_cnpj,
                valor_pago:use.valor_pago,
                data_pagto:use.data_pagto,
                data_vecto:use.data_vecto,
                uuidbancos:use.uuidbancos,
                incidencia:use.incidencia,
                parcelas_n:use.parcelas_n,
                n_doc_pagto:use.n_doc_pagto,
                uuidformapagto:use.uuidformapagto,
                status:use.status,
                obs:use.obs,

                


            }
            return DescItemOfSummary;
            }

        )

        const responseDTO = {
            summary,
        };

        return responseDTO;
    }
}

export default LoadPagamentoSummaryService;
