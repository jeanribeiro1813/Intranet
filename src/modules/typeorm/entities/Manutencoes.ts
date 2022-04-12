import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import  {v4 as uuid} from 'uuid';
  
  @Entity('tb_manutencoes')
  class Manutencoes{
  
    @PrimaryGeneratedColumn('uuid')
    cod_manutencao_uuid!: string;

    @Column()
    descricao!: string;
  
    @Column()
    valor!:string ;
  
    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;

    @Column()
    cod_manutencao!:number;
  
    constructor(){
        if (!this.cod_manutencao_uuid){
            this.cod_manutencao_uuid = uuid();
        }
    }
  }
  
  export default Manutencoes;
  