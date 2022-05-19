import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

import  {v4 as uuid} from 'uuid';


@Entity('tb_pagamentos')
class Clientes{

    @PrimaryGeneratedColumn()
    uuidpagamento!: string;

    @Column()
    empresa!: string;

    @Column()
    uuidprojeto!:string;
    
    @Column('uuid')
    uuidn1!: string;

    @Column('uuid')
    uuidn2!:string;

    @Column('uuid')
    uuidn3!: string;

    @Column('uuid')
    uuidcolab_forne!: string;

    @Column('numeric')
    valor_pago!:number;

    @Column('date')
    data_pagto!: string;

    @Column('date')
    data_vecto!: string;

    @Column('uuid')
    uuidbancos!:string;

    @Column()
    incidencia!: string;

    @Column()
    parcelas_n!: string;

    @Column()
    n_doc_pagto!: string;

    @Column('uuid')
    uuidformapagto!:string;

    @Column()
    obs!: string;

    @Column('uuid')
    sttpguuid!: string;

    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;
    
    @Column('integer')
    linha!: number;

    constructor(){
        if (!this.uuidpagamento){
            this.uuidpagamento = uuid();
        }
    }

}

export default Clientes;