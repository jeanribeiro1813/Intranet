import { getCustomRepository } from "typeorm";
import Projetos from '../../typeorm/entities/Projetos';
import ProjetosRepository from '../../typeorm/repositories/ProjetosRepository'


class LoadProjetosService {

    public async load(): Promise<Projetos[] | undefined>{

        const loadService = getCustomRepository(ProjetosRepository);

        const cargoRepo = await loadService.find();

        return cargoRepo;
    }
}

export default LoadProjetosService;
