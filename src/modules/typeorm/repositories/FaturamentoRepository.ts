import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import Faturamento from '../entities/Faturamento';

@EntityRepository(Faturamento)
export default class FaturamentoRepository extends Repository<Faturamento> {

    public async findByCode(cod_fat: string): Promise< Faturamento | undefined > {

      const faturamento = this.findOne({
        where : {
          cod_fat
        },

      });
      return faturamento;
}

public async findUsers(usuario: string,data:string): Promise< Faturamento [] | undefined > {

  const faturamento = this.find({
    where : [{usuario},{data}]

  });
  return faturamento;
}
}
