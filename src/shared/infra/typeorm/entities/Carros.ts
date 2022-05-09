import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

import  {v4 as uuid} from 'uuid';


@Entity('tb_carro')
class Carros{
    @PrimaryGeneratedColumn()
    id_uuid!:string;
    
    @Column()
    placa!: string;
    
    @Column()
    carro!: string;
    
    @Column()
    ano!:number;
    
    @Column()
    cor!: string;
    
    @Column()
    km!:string;
    
    @Column()
    ativo!:number;
    
    @Column()
    garagem!:string;
    
    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
    
    @Column()
    id!:number;

    constructor(){
        if (!this.id_uuid){
            this.id_uuid = uuid();
        }
    }
}

export default Carros;
