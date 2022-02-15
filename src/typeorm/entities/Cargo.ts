import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn
} from "typeorm";
    
    
@Entity('user')
class Cargo{

    // @PrimaryGeneratedColumn('uuid')
    // cod_cargo!: number;
    
    // @Column('varchar')
    // desc_cargo!:string ;

    @PrimaryGeneratedColumn('uuid')
    id!: number;
    
    @Column('varchar')
    name!:string ;

    @Column('varchar')
    email!:string ;

    @Column('varchar')
    password!:string ;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
    
export default Cargo;