import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import Reserva from '../entities/Reserva';

@EntityRepository(Reserva)
export default class AdvRepository extends Repository<Reserva> {

    public async findById(cod_reserva_uuid: string): Promise< Reserva | undefined > {

      const faturamento = this.findOne({
        where : {
          cod_reserva_uuid
        },

      });
      return faturamento;
}


}

