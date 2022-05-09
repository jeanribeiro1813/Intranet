import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import  {v4 as uuid} from 'uuid';

@Entity('tb_atv')
class Atividade{

  @PrimaryGeneratedColumn('uuid')
  uuidatividade!: string;

  @Column('date')
  atividade!:string ;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @Column()
  cod_atv!:string ;

  constructor(){
      if (!this.uuidatividade){
          this.uuidatividade = uuid();
      }
  }
}

export default Atividade;
