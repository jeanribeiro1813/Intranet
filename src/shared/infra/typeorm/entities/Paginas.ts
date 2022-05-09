import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import  {v4 as uuid} from 'uuid';
  
  @Entity('tb_pagina')
  class Pagina{
  
    @PrimaryGeneratedColumn('uuid')
    cod_page_uuid!: string;

    @Column()
    pagina!: string;
  
    @Column()
    descricao!:string ;

    @Column()
    banner!:number ;
  
    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;

    @Column()
    cod_page!:number;
  
    constructor(){
        if (!this.cod_page_uuid){
            this.cod_page_uuid = uuid();
        }
    }
  }
  
  export default Pagina;
  