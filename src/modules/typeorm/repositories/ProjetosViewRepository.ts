import { Repository, EntityRepository } from 'typeorm';

import ProjetosView from '../entities/ProjetosView';

@EntityRepository(ProjetosView)
export default class ProjetosViewRepository extends Repository<ProjetosView> {

    public async findByCode(uuidprojeto: string): Promise< ProjetosView | undefined > {

      const projeto = this.findOne({
        where : {
          uuidprojeto
        },

      });
      return projeto;
}


}
