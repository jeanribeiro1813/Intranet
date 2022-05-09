import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

import  {v4 as uuid} from 'uuid';

@Entity('tb_cargo')
class Cargo{

    @PrimaryGeneratedColumn()
    uuidcargo!:string;

    @Column()
    cargo!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @Column('integer')
    cod_cargo!:number

    constructor(){
        if (!this.uuidcargo){
            this.uuidcargo = uuid();
        }
    }

}

export default Cargo;