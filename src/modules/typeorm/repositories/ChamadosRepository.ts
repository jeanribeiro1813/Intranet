import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import Chamados from '../entities/Chamados';

@EntityRepository(Chamados)
export default class CargoRepository extends Repository<Chamados>{

    public async findByCod(cod_chamado_uuid: string):Promise <Chamados | undefined>{

        const chamados = await this.findOne({
            where:{cod_chamado_uuid}
        });

        return chamados;
    }
    public async findByCodUser(cod_chamado:string):Promise <Chamados | undefined>{

        const chamados = await this.findOne({
            where:{cod_chamado}
        });

        return chamados;
    }
}