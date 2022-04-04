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
    cod_cargo_uuid!:string;

    @Column()
    desc_cargo!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @Column('integer')
    cod_cargo!:number

    constructor(){
        if (!this.cod_cargo_uuid){
            this.cod_cargo_uuid = uuid();
        }
    }

}

export default Cargo;