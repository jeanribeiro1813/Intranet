import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import Adv from '../entities/Adv';

@EntityRepository(Adv)
export default class AdvRepository extends Repository<Adv> {

    public async findById(codadv: string): Promise< Adv | undefined > {

      const faturamento = this.findOne({
        where : {
            codadv
        },

      });
      return faturamento;
}


}

