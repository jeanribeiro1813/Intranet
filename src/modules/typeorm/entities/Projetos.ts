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
  cod_proj_uuid!: string;

  @Column('date')
  data!:string ;

  @Column('int')
  contrato!:number ;

  @Column()
  co!:string ;

  @Column()
  projeto!:string ;

  @Column()
  cliente!:string ;

  @Column()
  cliente2!:string ;

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
  cod_proj!:number ;

  constructor(){
      if (!this.cod_proj_uuid){
          this.cod_proj_uuid = uuid();
      }
  }
}

export default Projetos;
