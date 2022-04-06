import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import Faturamento from '../entities/Faturamento';

@EntityRepository(Faturamento)
export default class FaturamentoRepository extends Repository<Faturamento> {

    public async findByCode(uuidfat: string): Promise< Faturamento | undefined > {

      const faturamento = this.findOne({
        where : {
          uuidfat
        },

      });
      return faturamento;
}

public async findUsers(uuidusuario: string,data:string): Promise< Faturamento [] | undefined > {

  const faturamento = this.find({
    where : [{uuidusuario},{data}]

  });
  return faturamento;
}
}
