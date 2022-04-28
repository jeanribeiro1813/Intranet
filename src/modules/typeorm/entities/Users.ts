import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import  {v4 as uuid} from 'uuid';
  
  @Entity('tb_usuario')
  class Users{
  
    @PrimaryGeneratedColumn('uuid')
    uuidusuario!: string;
  
    @Column()
    login!:string ;
  
    @Column()
    senha!:string ;
  
    @Column()
    usuario!:string ;
  
    @Column('int')
    n_cnh!:number ;
  
    @Column('date')
    dt_validade!:string ;
  
    @Column()
    email!:string ;
  
    @Column('int')
    ramal!:number ;
  
    @Column('char')
    status!:string ;
  
    @Column()
    h_status!:string ;
  
    @Column()
    last_log!:string ;
  
    @Column()
    log_time!:string ;
  
    @Column('date')
    dt_nasc!:string ;
  
    @Column()
    contato!:string ;
  
    @Column()
    contato2!:string ;
  
    @Column()
    uuidcargo!:string ;
  
    @Column()
    uuiddeparta!:string ;
  
    @Column('int')
    alarm_id!:number ;
  
    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;
  
    @Column('int')
    cod_usuario!:number ;

    @Column()
    avatar!:string ;

    @Column()
    cpf_cnpj!: string;
  
    constructor(){
        if (!this.uuidusuario){
            this.uuidusuario = uuid();
        }
    }
  }
  
  export default Users;
  