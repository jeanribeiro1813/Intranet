import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import FaturamentoView from '../entities/FaturamentoView';

@EntityRepository(FaturamentoView)
export default class FaturamentoViewRepository extends Repository<FaturamentoView> {

    public async findByCode(codfat: string): Promise< FaturamentoView | undefined > {

      const faturamento = this.findOne({
        where : {
          codfat
        },

      });
      return faturamento;
}

public async findUsers(nome_usuario: string,data_:string): Promise< FaturamentoView [] | undefined > {

  const faturamento = this.find({
    where : [{nome_usuario},{data_}]

  });
  return faturamento;
}
}
