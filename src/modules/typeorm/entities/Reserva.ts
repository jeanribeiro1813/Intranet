import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  import  {v4 as uuid} from 'uuid';
  
  @Entity('tb_reserva')
  class Reserva{
  
    @PrimaryGeneratedColumn('uuid')
    cod_reserva_uuid!: string;

    @Column()
    placa!: string;
  
    @Column()
    usuario!:string ;
  
    @Column('date')
    dt_saida!: string;
  
    @Column('date')
    dt_chegada!:string ;

    @Column('time with time zone')
    hora_saida!: string;
  
    @Column('time with time zone')
    hora_chegada!:string ;
  
    @Column()
    km_saida!: string;
  
    @Column()
    km_chegada!:string ;
    
    @Column()
    projeto!: string;
  
    @Column('bit')
    cancelado!:number ;
  
    @Column()
    desc_cancel!: string;
  
    @Column('time with time zone')
    dt_cancel!:string ;

    @Column()
    dev_obs!: string;
  
    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;

    @Column()
    cod_reserva!:number;
  
    constructor(){
        if (!this.cod_reserva_uuid){
            this.cod_reserva_uuid = uuid();
        }
    }
  }
  
  export default Reserva;
  