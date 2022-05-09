import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import Departamento from '../entities/Departamento';

@EntityRepository(Departamento)
export default class CarrosRepository extends Repository<Departamento> {

    public async findById(uuiddeparta: string): Promise< Departamento | undefined > {

      const faturamento = this.findOne({
        where : {
          uuiddeparta
        },

      });
      return faturamento;
}


}

