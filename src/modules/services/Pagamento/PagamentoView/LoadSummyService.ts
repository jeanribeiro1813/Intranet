import { getCustomRepository } from "typeorm";
import PagamentoViewRepository from '../../../../shared/infra/typeorm/repositories/PagamentoViewRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    uuidpagamento: string;
    cliente:string;
    empresa: string;
    departamento: string;  
    nprojeto:string;
    contrato: string;
    contabn1: string;
    grupon2:string;
    subgrupon3: string;
    usuario: string;
    cpf_cnpj: string;
    valor_pago:string;
    data_pagto: string;
    data_vecto: string;
    banco:string;
    incidencia: string;
    parcelas_n: string;
    n_doc_pagto: string;  
    formapagto:string;
    status: string;
    obs: string;
  

}





class LoadPagamentoSummaryService{
    public async executeDes (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(PagamentoViewRepository);

        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                

                uuidpagamento:use.uuidpagamento,
                cliente:use.cliente,
                empresa:use.empresa,
                departamento:use.departamento,
                nprojeto:use.nprojeto,
                contrato:use.contrato,
                contabn1:use.contabn1,
                grupon2:use.grupon2,
                subgrupon3:use.subgrupon3,
                usuario:use.usuario,
                cpf_cnpj:use.cpf_cnpj,
                valor_pago:use.valor_pago,
                data_pagto:use.data_pagto,
                data_vecto:use.data_vecto,
                banco:use.banco,
                incidencia:use.incidencia,
                parcelas_n:use.parcelas_n,
                n_doc_pagto:use.n_doc_pagto,
                formapagto:use.formapagto,
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
