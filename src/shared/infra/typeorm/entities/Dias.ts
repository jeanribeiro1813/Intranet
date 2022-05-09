import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import  {v4 as uuid} from 'uuid';
  
  @Entity('tb_dias_uteis')
  class Dias{
  
    @PrimaryGeneratedColumn('uuid')
    uuiddiasuteis!: string;

    @Column('text')
    ano!: string;
  
    @Column('text')
    mes!:string ;

    @Column('text')
    codigo!:string ;

    @Column('text')
    dias!:string ; 
  
    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;
  
    constructor(){
        if (!this.uuiddiasuteis){
            this.uuiddiasuteis = uuid();
        }
    }
  }
  
  export default Dias;
  