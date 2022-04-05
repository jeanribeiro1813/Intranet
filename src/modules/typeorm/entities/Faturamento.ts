import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Generated,
} from "typeorm";

import  {v4 as uuid} from 'uuid';

@Entity('tb_fat')
class Faturamento{

    @PrimaryGeneratedColumn()
    codfat!: string;

    @Column('uuid')
    codusuario!: string

    @Column('uuid')
    //@Generated('uuid')
    coddeparta!: string

    @Column('uuid')
    codprojeto!: string

    @Column()
    contrato!:string ;

    @Column('uuid')
    codativida!:string ;

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

export default Faturamento;
