import { Repository, EntityRepository } from 'typeorm';

import Dias from '../entities/Dias';

@EntityRepository(Dias)
export default class DiasRepository extends Repository<Dias> {

    public async findById(uuiddiasuteis: string): Promise< Dias | undefined > {

      const dias = this.findOne({
        where : {
          uuiddiasuteis
        },

      });
      return dias;
}


}

