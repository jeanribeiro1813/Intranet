import { Repository, EntityRepository } from 'typeorm';

import Projetos from '../entities/Projetos';

@EntityRepository(Projetos)
export default class ProjetosRepository extends Repository<Projetos> {

    public async findByCode(uuidprojeto: string): Promise< Projetos | undefined > {

      const projeto = this.findOne({
        where : {
          uuidprojeto
        },

      });
      return projeto;
}


}
