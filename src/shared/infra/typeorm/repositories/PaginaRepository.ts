import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import Paginas from '../entities/Paginas';

@EntityRepository(Paginas)
export default class PaginasRepository extends Repository<Paginas> {

    public async findById(cod_page_uuid: string): Promise< Paginas | undefined > {

      const faturamento = this.findOne({
        where : {
          cod_page_uuid
        },

      });
      return faturamento;
}


}

