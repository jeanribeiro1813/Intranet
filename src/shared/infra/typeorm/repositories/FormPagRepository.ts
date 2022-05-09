import { Repository, EntityRepository } from 'typeorm';

import Entitie from '../entities/FormPag';

@EntityRepository(Entitie)
export default class BancosRepository extends Repository<Entitie> {

    public async findById(uuidformpag: string): Promise< Entitie | undefined > {

      const result = this.findOne({
        where : {
            uuidformpag
        },

      });
      return result;
}


}

