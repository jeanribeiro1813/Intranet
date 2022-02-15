import { Repository, EntityRepository } from 'typeorm';

import Cargo from '../entities/Cargo';

@EntityRepository(Cargo)
class CargoRepository extends Repository<Cargo> {
    findById(id: string) {
        throw new Error('Method not implemented.');
    }


}

export default CargoRepository;
