import { Repository, EntityRepository } from 'typeorm';

import Entitie from '../entities/Ramais';

@EntityRepository(Entitie)
export default class BancosRepository extends Repository<Entitie> {

    public async findById(uuidramal: string): Promise< Entitie | undefined > {

      const result = this.findOne({
        where : {
          uuidramal
        },

      });
      return result;
}


}

