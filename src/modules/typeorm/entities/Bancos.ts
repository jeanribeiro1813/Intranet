import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import  {v4 as uuid} from 'uuid';
  
  @Entity('tb_bancos')
  class Bancos{
  
    @PrimaryGeneratedColumn('uuid')
    uuidbanco!: string;

    @Column()
    codigo!: string;
  
    @Column()
    descricao!:string ;
  
    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;

  
    constructor(){
        if (!this.uuidbanco){
            this.uuidbanco = uuid();
        }
    }
  }
  
  export default Bancos;
  