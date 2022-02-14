import { Repository, EntityRepository } from 'typeorm';

import Project from '../entities/Projetos';

@EntityRepository(Project)
class CargoRepository extends Repository<Project> {
    findById(id: string) {
        throw new Error('Method not implemented.');
    }


}

export default CargoRepository;
