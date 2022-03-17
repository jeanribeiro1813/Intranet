import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

import  {v4 as uuid} from 'uuid';

@Entity('tb_fat')
class Faturamento{

    @PrimaryGeneratedColumn()
    cod_fat!: string;

    @Column()
    usuario!:number ;

    @Column()
    departamento!:string ;

    @Column()
    cod_proj!:number ;

    @Column()
    nome_proj!:string;

    @Column()
    contrato!:string ;

    @Column()
    atividade!:string ;

    @Column()
    data_!:string ;

    @Column()
    inicio!:string ;

    @Column()
    fim!:string ;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

   

    constructor(){
        if (!this.cod_fat){
            this.cod_fat = uuid();
        }
    }
}

export default Faturamento;
