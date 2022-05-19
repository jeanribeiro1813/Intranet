import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import  {v4 as uuid} from 'uuid';
  
  @Entity('tb_adv')
  class Adv{
  
    @PrimaryGeneratedColumn('uuid')
    codadv!: string;

    @Column()
    cod_page!: number;
  
    @Column()
    desc_adv!:string ;
  
    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;

    @Column()
    cod_adv!:string;
  
    constructor(){
        if (!this.codadv){
            this.codadv = uuid();
        }
    }
  }
  
  export default Adv;
  