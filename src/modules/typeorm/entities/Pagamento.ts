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

    @Column('uuid')
    uuidprojeto!:string;

    @Column('uuid')
    uuidcontrato!:string;

    @Column()
    n1!: string;

    @Column()
    n2!:string;

    @Column()
    n3!: string;

    @Column('uuid')
    uuidcolab_forne!: string;

    @Column()
    valor_pago!:string;

    @Column('date')
    data_pagto!: string;

    @Column('date')
    data_vecto!: string;

    @Column()
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
    status!: string;

    @Column()
    obs!: string;

    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;
    


    constructor(){
        if (!this.uuidpagamento){
            this.uuidpagamento = uuid();
        }
    }

}

export default Clientes;