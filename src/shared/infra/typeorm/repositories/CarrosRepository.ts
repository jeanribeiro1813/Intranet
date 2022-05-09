import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import Carros from '../entities/Carros';

@EntityRepository(Carros)
export default class CarrosRepository extends Repository<Carros> {

    public async findById(id_uuid: string): Promise< Carros | undefined > {

      const faturamento = this.findOne({
        where : {
            id_uuid
        },

      });
      return faturamento;
}


}

