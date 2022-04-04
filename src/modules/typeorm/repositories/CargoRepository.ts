import { add } from 'date-fns';
import { Repository, EntityRepository } from 'typeorm';

import Cargo from '../entities/Cargo';

@EntityRepository(Cargo)
export default class CargoRepository extends Repository<Cargo>{

    public async findByCod(cod_cargo_uuid: string):Promise <Cargo | undefined>{

        const cargo = await this.findOne({
            where:{cod_cargo_uuid}
        });

        return cargo;
    }
}