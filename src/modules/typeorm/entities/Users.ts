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
  
    @Column('time with time zone')
    last_log!:string ;
  
    @Column('time with time zone')
    log_time!:string ;
  
    @Column('date')
    dt_nasc!:string ;
  
    @Column()
    contato!:string ;
  
    @Column()
    contato2!:string ;
  
    @Column('uuid')
    uuidcargo!:string ;
  
    @Column('uuid')
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

    @Column('numeric')
    equadramento!: number;
  
    @Column('numeric')
    carga_horaria!: number;
  
    @Column('numeric')
    proventos!: number;

    @Column('numeric')
    va!: number;

    @Column('numeric')
    vr!: number;

    @Column('numeric')
    vt!: number;

    @Column()
    banco!: number;
  
  
  
    constructor(){
        if (!this.uuidusuario){
            this.uuidusuario = uuid();
        }
    }
  }
  
  export default Users;
  