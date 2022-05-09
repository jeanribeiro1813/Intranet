import { Repository, EntityRepository } from 'typeorm';

import entitie from '../entities/N2';

@EntityRepository(entitie)
export default class N2Repository extends Repository<entitie> {

    public async findById(uuidn2: string): Promise< entitie | undefined > {

      const result = this.findOne({
        where : {
            uuidn2
        },

      });
      return result;
}


}

