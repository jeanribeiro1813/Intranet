import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import Pagamento from '../entities/Pagamento';

@EntityRepository(Pagamento)
export default class PagamentoRepository extends Repository<Pagamento> {

    public async findByCode(uuidpagamento: string): Promise< Pagamento | undefined > {

      const pagamento = this.findOne({
        where : {
          uuidpagamento
        },

      });
      return pagamento;
}

public async findPag(uuidpagamento: string,data:string): Promise< Pagamento [] | undefined > {

  const pagamento = this.find({
    where : [{uuidpagamento},{data}]

  });
  return pagamento;
}
}
