import { Repository, EntityRepository } from 'typeorm';

import Entitie from '../entities/Bancos';

@EntityRepository(Entitie)
export default class BancosRepository extends Repository<Entitie> {

    public async findById(uuidbanco: string): Promise< Entitie | undefined > {

      const result = this.findOne({
        where : {
            uuidbanco
        },

      });
      return result;
}


}

