import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

import  {v4 as uuid} from 'uuid';


@Entity('tb_clientes')
class Clientes{

    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    projeto!:string;

    @Column()
    cliente!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;


    constructor(){
        if (!this.id){
            this.id = uuid();
        }
    }

}

export default Clientes;