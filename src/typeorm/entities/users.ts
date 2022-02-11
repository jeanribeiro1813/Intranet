import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BeforeInsert,
    BeforeUpdate
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
}

export default Usuario;