import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import  {v4 as uuid} from 'uuid';
  
  @Entity('tb_n2')
  class N2{
  
    @PrimaryGeneratedColumn('uuid')
    uuidn2!: string;

    @Column()
    codigo!: string;
  
    @Column()
    descricao!:string ;
  
    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;

  
    constructor(){
        if (!this.uuidn2){
            this.uuidn2 = uuid();
        }
    }
  }
  
  export default N2;
  