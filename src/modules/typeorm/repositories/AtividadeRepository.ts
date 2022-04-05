import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import Atividades from '../entities/Atividades';

@EntityRepository(Atividades)
export default class CarrosRepository extends Repository<Atividades> {

    public async findById(codativida: string): Promise< Atividades | undefined > {

      const faturamento = this.findOne({
        where : {
          codativida
        },

      });
      return faturamento;
}


}

