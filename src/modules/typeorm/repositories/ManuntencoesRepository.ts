import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import Manutencoes from '../entities/Manutencoes';

@EntityRepository(Manutencoes)
export default class ManutencoesRepository extends Repository<Manutencoes> {

    public async findById(cod_manutencao_uuid: string): Promise< Manutencoes | undefined > {

      const Manutencoe = this.findOne({
        where : {
          cod_manutencao_uuid
        },

      });
      return Manutencoe;
}


}

