import { Repository, EntityRepository } from 'typeorm';

import entitie from '../entities/N3';

@EntityRepository(entitie)
export default class N3Repository extends Repository<entitie> {

    public async findById(uuidn3: string): Promise< entitie | undefined > {

      const result = this.findOne({
        where : {
            uuidn3
        },

      });
      return result;
}


}

