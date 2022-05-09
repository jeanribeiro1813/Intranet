import { Repository, EntityRepository } from 'typeorm';

import Fornecedores from '../entities/Fornecedores';

@EntityRepository(Fornecedores)
export default class FornecedoresRepository extends Repository<Fornecedores> {

    public async findById(uuidusuario: string): Promise< Fornecedores | undefined > {

      const fornecedores = this.findOne({
        where : {
          uuidusuario
        },

      });
      return fornecedores;
}


}

