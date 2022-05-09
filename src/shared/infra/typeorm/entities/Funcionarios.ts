import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import  {v4 as uuid} from 'uuid';
  
  @Entity('tb_func')
  class Funcionario{
  
    @PrimaryGeneratedColumn('uuid')
    cod_func_uuid!: string;

    @Column()
    cod_cargo!: number;
  
    @Column()
    cod_usuario!:number ;
  
    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;

    @Column()
    cod_func!:number;
  
    constructor(){
        if (!this.cod_func_uuid){
            this.cod_func_uuid = uuid();
        }
    }
  }
  
  export default Funcionario;
  