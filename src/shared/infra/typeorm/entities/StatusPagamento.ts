import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import  {v4 as uuid} from 'uuid';

@Entity('tb_status_pagamento')
class Atividade{

  @PrimaryGeneratedColumn('uuid')
  sttpguuid!: string;

  @Column('date')
  status!:string ;

  @Column()
  visivel!:string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  constructor(){
      if (!this.sttpguuid){
          this.sttpguuid = uuid();
      }
  }
}

export default Atividade;
