import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import  {v4 as uuid} from 'uuid';

@Entity('tb_departa')
class Departamento{

  @PrimaryGeneratedColumn('uuid')
  uuiddeparta!: string;

  @Column('date')
  departamento!:string ;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  constructor(){
      if (!this.uuiddeparta){
          this.uuiddeparta = uuid();
      }
  }
}

export default Departamento;
