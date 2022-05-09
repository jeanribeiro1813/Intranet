import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import Contrato from '../entities/Contrato';

@EntityRepository(Contrato)
export default class ContratoRepository extends Repository<Contrato> {

    public async findById(uuidcontrato: string): Promise< Contrato | undefined > {

      const faturamento = this.findOne({
        where : {
          uuidcontrato
        },

      });
      return faturamento;
}


}

