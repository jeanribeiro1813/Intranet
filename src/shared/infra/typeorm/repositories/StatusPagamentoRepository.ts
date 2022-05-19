import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import StatusPagamento from '../entities/StatusPagamento';

@EntityRepository(StatusPagamento)
export default class StatusPagamentoRepository extends Repository<StatusPagamento> {

    public async findById(sttpguuid: string): Promise< StatusPagamento | undefined > {

      const faturamento = this.findOne({
        where : {
          sttpguuid
        },

      });
      return faturamento;
}


}

