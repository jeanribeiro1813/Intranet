import { 
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

import  {v4 as uuid} from 'uuid';
    
    
@Entity('user')
class Cargo{

    @PrimaryGeneratedColumn()
    id!: string;
    
    @Column()
    name!:string ;

    @Column()
    email!:string ;

    @Column()
    password!:string ;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if (!this.id){
            this.id = uuid();
        }
    }
}
    
export default Cargo;