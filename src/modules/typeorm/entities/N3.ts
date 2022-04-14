import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import  {v4 as uuid} from 'uuid';
  
  @Entity('tb_n3')
  class N3{
  
    @PrimaryGeneratedColumn('uuid')
    uuidn3!: string;

    @Column()
    codigo!: string;
  
    @Column()
    descricao!:string ;
  
    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;

  
    constructor(){
        if (!this.uuidn3){
            this.uuidn3 = uuid();
        }
    }
  }
  
  export default N3;
  