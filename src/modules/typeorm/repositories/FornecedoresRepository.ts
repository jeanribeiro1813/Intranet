import { Repository, EntityRepository } from 'typeorm';

import Fornecedores from '../entities/Fornecedores';

@EntityRepository(Fornecedores)
export default class FornecedoresRepository extends Repository<Fornecedores> {

    public async findById(uuidfornece: string): Promise< Fornecedores | undefined > {

      const fornecedores = this.findOne({
        where : {
          uuidfornece
        },

      });
      return fornecedores;
}


}

