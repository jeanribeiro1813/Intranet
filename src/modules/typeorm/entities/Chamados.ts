import { StringSchema } from "joi";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

import  {v4 as uuid} from 'uuid';


@Entity('tb_chamado')
class Chamados{

    @PrimaryGeneratedColumn()
    cod_chamado_uuid!: string;

    @Column()
    cod_usuario!:number;

    @Column()
    equipamento!: string;
    
    @Column()
    descricao!:string;

    @Column()
    prioridade!: string;

    @Column()
    dt_solicitacao!:string;

    @Column()
    dt_conclusao!: string;
    
    @Column()
    desc_conclusao!:string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @Column()
    cod_chamado!: number;


    constructor(){
        if (!this.cod_chamado_uuid){
            this.cod_chamado_uuid = uuid();
        }
    }

}

export default Chamados;