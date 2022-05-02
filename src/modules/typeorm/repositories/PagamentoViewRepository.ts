import { Repository, EntityRepository } from 'typeorm';

import PagamentoView from '../entities/PagamentoView';

@EntityRepository(PagamentoView)
export default class PagamentoViewRepository extends Repository<PagamentoView> {

    public async findByCode(uuidpagamento: string): Promise< PagamentoView | undefined > {

      const pagamento = this.findOne({
        where : {
          uuidpagamento
        },

      });
      return pagamento;
}

public async findPag(uuidpagamento: string,data:string): Promise< PagamentoView [] | undefined > {

  const pagamento = this.find({
    where : [{uuidpagamento},{data}]

  });
  return pagamento;
}
}
