import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import Clientes from '../entities/Clientes';

Clientes
@EntityRepository(Clientes)
export default class ClientesRepository extends Repository<Clientes>{

    public async findById(id: string):Promise <Clientes | undefined>{

        const Clientes = await this.findOne({
            where:{id}
        });

        return Clientes;
    }

    public async findByProje(projeto: string):Promise <Clientes | undefined>{

        const Clientes = await this.findOne({
            where:{projeto}
        });

        return Clientes;
    }
}