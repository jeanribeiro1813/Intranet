import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import Atividades from '../entities/Atividades';

@EntityRepository(Atividades)
export default class CarrosRepository extends Repository<Atividades> {

    public async findById(uuidatividade: string): Promise< Atividades | undefined > {

      const faturamento = this.findOne({
        where : {
          uuidatividade
        },

      });
      return faturamento;
}


}

