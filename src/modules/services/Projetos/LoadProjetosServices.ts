import { getCustomRepository } from "typeorm";
import Projetos from '../../../modules/typeorm/entities/Projetos';
import ProjetosRepository from '../../../modules/typeorm/repositories/ProjetosRepository'


class LoadProjetosService {

    public async load(): Promise<Projetos[] | undefined>{

        const loadService = getCustomRepository(ProjetosRepository);

        const cargoRepo = await loadService.find();

        return cargoRepo;
    }
}

export default LoadProjetosService;
