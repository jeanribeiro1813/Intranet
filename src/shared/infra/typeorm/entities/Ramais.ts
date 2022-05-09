import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import  {v4 as uuid} from 'uuid';
  
  @Entity('tb_ramais')
  class Bancos{
  
    @PrimaryGeneratedColumn('uuid')
    uuidramal!: string;

    @Column('integer')
    ramal!: number;
  
    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;

    @Column()
    cod_atv!: string;

  
    constructor(){
        if (!this.uuidramal){
            this.uuidramal = uuid();
        }
    }
  }
  
  export default Bancos;
  