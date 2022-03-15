import { EntityRepository, Repository } from "typeorm";
import Users from "../entities/Users";

@EntityRepository (Users)
export default class UsersRepository extends Repository<Users>{

    public async findByCodUser(cod_usuario_uuid: string): Promise<Users | undefined> {

        const user = await this.findOne({
            where:{
                cod_usuario_uuid
            }
        });
        return user;
    }

    public async findByName(nome_usuario: string):Promise<Users | undefined> {
        const user = await this.findOne({
            where:{
                nome_usuario
            }
        });

        return user
    }

    public async findByEmail (email : string):Promise<Users | undefined>{

        const user = await this.findOne({
            where:{
                email
            }
        });

        return user;
}

public async findByLogin (login : string):Promise<Users | undefined>{

    const user = await this.findOne({
        where:{
            login
        }
    });

    return user;
}
}

