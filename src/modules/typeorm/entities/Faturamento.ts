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
    //@Generated('uuid')
    uuiddeparta!: string

    @Column('uuid')
    uuidprojeto!: string

    @Column('uuid')
    uuidcontrato!:string ;

    @Column('uuid')
    uuidativida!:string ;

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

    @Column()
    empresa!:string;

    @Column('uuid')
    uuidcliente!:string;
    
    constructor(){
        if (!this.uuidfat){
            this.uuidfat = uuid();
        }
    }
}

export default Faturamento;
