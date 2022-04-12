import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import  {v4 as uuid} from 'uuid';

@Entity('tb_proj')
class Projetos{

  @PrimaryGeneratedColumn('uuid')
  uuidprojeto!: string;

  @Column('date')
  data!:string ;

  @Column()
  nprojeto!: string;

  @Column('text')
  contrato!:string ;

  @Column()
  projeto!:string ;

  @Column()
  cliente!:string ;

  @Column()
  cliente2!:string;

  @Column()
  numero!:string ;

  @Column()
  gerente!:string ;

  @Column()
  coordenador!:string ;

  @Column('text')
  equipe!:string ;

  @Column()
  status!:string ;

  @Column()
  proposta!:string ;

  @Column()
  departamento!:string ;

  @Column('date')
  previsao!:string ;

  @Column()
  nproc_origem!:string ;

  @Column()
  valor!:string ;

  @Column()
  memoalt!:string ;

  @Column()
  dt_fim!:string ;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @Column()
  cod_proj!:number

  constructor(){
      if (!this.uuidprojeto){
          this.uuidprojeto = uuid();
      }
  }
}

export default Projetos;
