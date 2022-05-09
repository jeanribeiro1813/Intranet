import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import Funcionarios from '../entities/Funcionarios';

@EntityRepository(Funcionarios)
export default class FuncionariosRepository extends Repository<Funcionarios> {

    public async findById(cod_func_uuid: string): Promise< Funcionarios | undefined > {

      const faturamento = this.findOne({
        where : {
          cod_func_uuid
        },

      });
      return faturamento;
}


}

