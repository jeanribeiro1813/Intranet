import { Repository, EntityRepository } from 'typeorm';

import Entitie from '../entities/UsersView';

@EntityRepository(Entitie)
export default class UsersViewRepository extends Repository<Entitie> {

  public async findUsers(status: string): Promise< Entitie [] | undefined > {

    return this.find({
      where : [{status}]

    });

  }

}
