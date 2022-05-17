import {
    Column,
    PrimaryGeneratedColumn,
    ViewEntity,
} from "typeorm";


@ViewEntity('vw_tb_pagamentos')
class PagamentoView{

    @PrimaryGeneratedColumn()
    uuidpagamento!: string;

    @Column('integer')
    linha!: number;

    @Column()
    cliente!:string;

    @Column()
    empresa!: string;
    
    @Column()
    departamento!: string;

    @Column()
    nprojeto!:string;

    @Column()
    contrato!: string;

    @Column()
    contabn1!: string;

    @Column()
    grupon2!:string;

    @Column()
    subgrupon3!: string;

    @Column()
    usuario!: string;

    @Column()
    cpf_cnpj!: string;

    @Column()
    valor_pago!:string;

    @Column()
    data_pagto!: string;

    @Column()
    data_vecto!: string;

    @Column()
    banco!:string;

    @Column()
    incidencia!: string;

    @Column()
    parcelas_n!: string;

    @Column()
    n_doc_pagto!: string;

    @Column()
    formapagto!:string;

    @Column()
    status!: string;

    @Column()
    obs!: string;

}

export default PagamentoView;