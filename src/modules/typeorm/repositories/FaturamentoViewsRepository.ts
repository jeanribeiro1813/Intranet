import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import FaturamentoView from '../entities/FaturamentoView';

@EntityRepository(FaturamentoView)
export default class FaturamentoViewRepository extends Repository<FaturamentoView> {

    public async findByCode(uuidfat: string): Promise< FaturamentoView | undefined > {

      const faturamento = this.findOne({
        where : {
          uuidfat
        },

      });
      return faturamento;
}

public async findUsers(usuario: string,data_:string): Promise< FaturamentoView [] | undefined > {

  const faturamento = this.find({
    where : [{usuario},{data_}]

  });
  return faturamento;
}
}
