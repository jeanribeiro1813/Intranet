import { Repository, EntityRepository } from 'typeorm';

import Entitie from '../entities/N1';

@EntityRepository(Entitie)
export default class N1Repository extends Repository<Entitie> {

    public async findById(uuidn1: string): Promise< Entitie | undefined > {

      const result = this.findOne({
        where : {
            uuidn1
        },

      });
      return result;
}


}

