import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
    
    
@Entity('Teste')
class Projeto{

    @PrimaryGeneratedColumn('uuid')
    testeId!: number;
    
    @Column('varchar')
    testeOne!:string ;

    @Column('varchar')
    testeTwo!:string ;

    @Column('varchar')
    testeFour!:string ;

    @Column('varchar')
    testeFive!:string ;

    @Column('varchar')
    testeSix!:string ;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;




}
    
export default Projeto;