import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import  {v4 as uuid} from 'uuid';

@Entity('tb_fornecedores')
class Fornecedores{

  @PrimaryGeneratedColumn('uuid')
  uuidfornece!: string;

  @Column()
  nome!:string ;

  @Column()
  tp_doc!: string;

  @Column()
  doc!:string ;

  @Column()
  email!: string;

  @Column()
  contato!:string ;

  @Column()
  contato2!: string;

  @Column()
  cargo!:string ;

  @Column()
  status!:string ;

  @Column()
  avatar!:string ;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  constructor(){
      if (!this.uuidfornece){
          this.uuidfornece = uuid();
      }
  }
}

export default Fornecedores;
