import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Generated,
    ViewEntity,
} from "typeorm";

import  {v4 as uuid} from 'uuid';

@ViewEntity('vw_tb_fat')
class FaturamentoView{

    @PrimaryGeneratedColumn()
    codfat!: string;

    @Column()
    nome_usuario!: string

    @Column()
    departamento!: string

    @Column()
    projeto!: string

    @Column()
    cliente!:string ;

    @Column()
    atividade!:string ;

    @Column('date')
    data!:string ;

    @Column()
    inicio!:string ;

    @Column()
    fim!:string ;

    @Column()
    status!:string;

    @Column()
    obs!:string;

    constructor(){
        if (!this.codfat){
            this.codfat = uuid();
        }
    }
}

export default FaturamentoView;
