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
    uuidfat!: string;

    @Column('uuid')
    uuidusuario!: string

    @Column('uuid')
    uuidprojeto!: string

    @Column('uuid')
    uuidatividade!:string ;

    @Column('date')
    data!:string ;

    @Column()
    inicio!:string ;

    @Column()
    fim!:string ;
    
    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @Column('uuid')
    sttpguuid!:string;

    @Column()
    obs!:string;

    @Column()
    empresa!:string;

    
    constructor(){
        if (!this.uuidfat){
            this.uuidfat = uuid();
        }
    }
}

export default Faturamento;
