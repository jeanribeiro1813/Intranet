import {
  Column,
  PrimaryGeneratedColumn,
  ViewEntity,
} from "typeorm";

  
  @ViewEntity('vw_tb_usuario')
  class UsersView{
  
    @PrimaryGeneratedColumn()
    uuidusuario!: string;

    @Column()
    departamento!:string ;

    @Column()
    cargo!:string ;
  
    @Column()
    usuario!:string ;
  
    @Column()
    email!:string ;
  
    @Column('int')
    ramal!:number ;

    @Column()
    contato!:string ;
  
    @Column()
    contato2!:string ;
  
    status!:string ;
  
    @Column()
    h_status!:string ;
  
    @Column('date')
    dt_nasc!:Date ;

    @Column('text')
    enquadramento!:string ;
  
  
  }
  
  export default UsersView;
  