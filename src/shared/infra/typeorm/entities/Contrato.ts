import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import  {v4 as uuid} from 'uuid';
  
  @Entity('tb_contrato')
  class Contrato{
  
    @PrimaryGeneratedColumn('uuid')
    uuidcontrato!: string;

    @Column()
    contrato!: string;
 
    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;


    constructor(){
        if (!this.uuidcontrato){
            this.uuidcontrato = uuid();
        }
    }
  }
  
  export default Contrato;
  