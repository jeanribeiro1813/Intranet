import { Repository, EntityRepository } from 'typeorm';

import Projetos from '../entities/Projetos';

@EntityRepository(Projetos)
export default class ProjetosRepository extends Repository<Projetos> {

    public async findByCode(cod_proj_uuid: string): Promise< Projetos | undefined > {

      const projeto = this.findOne({
        where : {
          cod_proj_uuid
        },

      });
      return projeto;
}


}
