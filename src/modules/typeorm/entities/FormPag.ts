import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import  {v4 as uuid} from 'uuid';
  
  @Entity('tb_forms_pagto')
  class Bancos{
  
    @PrimaryGeneratedColumn('uuid')
    uuidformpag!: string;

    @Column()
    codigo!: string;
  
    @Column()
    descricao!:string ;
  
    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;

  
    constructor(){
        if (!this.uuidformpag){
            this.uuidformpag = uuid();
        }
    }
  }
  
  export default Bancos;
  