import { getCustomRepository } from "typeorm";
import FaturamentoViewsRepository from '../../../../modules/typeorm/repositories/FaturamentoViewsRepository';
import FaturamentoView from '../../../../modules/typeorm/entities/FaturamentoView'


class LoadFatViewService {

    public async load(): Promise<FaturamentoView[] | undefined>{

        const loadService = getCustomRepository(FaturamentoViewsRepository);

        const cargoRepo = await loadService.find({
            order: {
                data: "ASC"            },
        });

        return cargoRepo;
    }
}

export default LoadFatViewService;
