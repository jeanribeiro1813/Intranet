import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ViewEntity
} from "typeorm";

import  {v4 as uuid} from 'uuid';

@ViewEntity('vw_tb_proj')
class ProjetosView{

  @PrimaryGeneratedColumn('uuid')
  uuidprojeto!: string;

  @Column()
  nprojeto!: string;

  @Column('text')
  projeto!:string ;

  @Column('date')
  data!:string ;

  @Column('uuid')
  uuiddeparta!:string ;

  @Column()
  departamento!:string;

  @Column('uuid')
  uuidcontrato!:string ;

  @Column('text')
  contrato!:string ;

  @Column('uuid')
  uuidcliente!:string ;

  @Column()
  cliente!:string ;

  @Column()
  numero!:string ;

  @Column('uuid')
  gerente!:string ;

  @Column('uuid')
  coordenador!:string ;

  @Column()
  equipe!:string ;

  @Column()
  status!:string ;

  @Column()
  proposta!:string ;

  @Column('date')
  previsao!:string ;

  @Column()
  nproc_origem!:string ;

  @Column()
  valor!:string ;

  @Column()
  memoalt!:string ;

  @Column()
  dt_fim!:string
}

export default ProjetosView;
