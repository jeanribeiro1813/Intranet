import { getCustomRepository } from "typeorm";
import Faturamento from '../../../modules/typeorm/entities/Faturamento';
import FatRepository from '../../../modules/typeorm/repositories/FaturamentoRepository'


class LoadCargoService {

    public async load(): Promise<Faturamento[] | undefined>{

        const loadService = getCustomRepository(FatRepository);

        const cargoRepo = await loadService.find();

        return cargoRepo;
    }
}

export default LoadCargoService;
