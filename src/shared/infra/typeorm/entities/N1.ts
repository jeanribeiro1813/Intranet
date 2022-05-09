import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import  {v4 as uuid} from 'uuid';
  
  @Entity('tb_n1')
  class N1{
  
    @PrimaryGeneratedColumn('uuid')
    uuidn1!: string;

    @Column()
    codigo!: string;
  
    @Column()
    descricao!:string ;
  
    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;

  
    constructor(){
        if (!this.uuidn1){
            this.uuidn1 = uuid();
        }
    }
  }
  
  export default N1;
  