import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Generated,
  } from "typeorm";
  
  import  {v4 as uuid} from 'uuid';
  
  @Entity('user_tokens')
  class UserToken{
  
    @PrimaryGeneratedColumn()
    id!: string;
    //Generated é responsavel por gerar um typo de dado , aqui eu quero o uuid (HASH)
    @Column()
    @Generated('uuid')
    token!:string ;
  
    @Column()
    user_id!:string ;
  
    @CreateDateColumn()
    created_at!: Date;
  
    @UpdateDateColumn()
    updated_at!: Date;
  
  
    constructor(){
        if (!this.id){
            this.id = uuid();
        }
    }
  }
  
  export default UserToken;
  