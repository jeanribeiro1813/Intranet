import {
    Column,
    PrimaryGeneratedColumn,
    ViewEntity,
} from "typeorm";

@ViewEntity('vw_tb_fat')
class FaturamentoView{

    @PrimaryGeneratedColumn('uuid')
    uuidfat!: string;

    @Column()
    empresa!: string;

    @Column('uuid')
    uuidusuario!: string;

    @Column()
    usuario!: string;

    @Column('uuid')
    uuiddeparta!: string;

    @Column()
    departamento!: string

    @Column('uuid')
    uuidprojeto!: string;

    @Column()
    nprojeto!: string;

    @Column()
    projeto!: string;

    @Column('uuid')
    uuidcontrato!:string ;

    @Column()
    contrato!:string ;

    @Column('uuid')
    uuidcliente!:string ;

    @Column()
    cliente!:string ;

    @Column('uuid')
    uuidativida!:string ;

    @Column()
    atividade!:string;

    @Column('date')
    data!:string;

    @Column()
    inicio!:string;

    @Column()
    fim!:string;

    @Column()
    status!:string;

    @Column()
    obs!:string;

}

export default FaturamentoView;
