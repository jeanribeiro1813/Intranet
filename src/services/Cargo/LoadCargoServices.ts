import { getCustomRepository } from "typeorm";
import Cargo from '../../typeorm/entities/Cargo';
import CargoRepository from '../../typeorm/repositories/CargoRepository';


class LoadCargoService {
    
    public async load(): Promise<Cargo[] | undefined>{

        const loadService = getCustomRepository(CargoRepository);

        const cargoRepo = await loadService.find();

        return cargoRepo;
    }
}

export default LoadCargoService;