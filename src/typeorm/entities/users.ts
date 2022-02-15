import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BeforeInsert,
    BeforeUpdate,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import bcrypt from 'bcryptjs';


@Entity('users')
class Usuario{

    @PrimaryGeneratedColumn('uuid')
    id!:number  ;

    @Column('varchar')
    nombre!:string ;

    @Column('varchar')
    profesion!:string   ;

    @Column('varchar')
    email!:string   ;

    @Column('varchar')
    acesso!:string ;

    @Column('varchar')
    contrasena!:string  ;

    @Column('varchar')
    user_situa!:string   ;

    @Column('integer')
    contacto!:number   ;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        this.contrasena = bcrypt.hashSync(this.contrasena,8)

    }

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Usuario;