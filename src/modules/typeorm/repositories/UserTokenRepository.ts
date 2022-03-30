import { EntityRepository, Repository } from "typeorm";
import UserToken from "../entities/UserToken";

@EntityRepository (UserToken)
export default class UsersRepository extends Repository<UserToken>{

    public async findByCodUser(id: string): Promise<UserToken | undefined> {

        const index = await this.findOne({
            where:{
                id
            }
        });
        return index;
    }

    public async findByToken(token: string):Promise<UserToken | undefined> {
        const userToken = await this.findOne({
            where:{
                token
            }
        });

        return userToken
    }

    //Responsavel por criar um user_id
    public async generate(user_id: string):Promise<UserToken> {
        const userToken = await this.create({
           user_id
        });

        await this.save(userToken)

        return userToken;
    }

}

