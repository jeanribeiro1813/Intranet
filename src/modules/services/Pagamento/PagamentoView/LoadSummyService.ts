import { getCustomRepository } from "typeorm";
import PagamentoViewRepository from '../../../../shared/infra/typeorm/repositories/PagamentoViewRepository'
import PagamentoView from '../../../../shared/infra/typeorm/entities/PagamentoView';


class LoadPagamentoSummaryService{
    public async execute (): Promise<PagamentoView[]> {

        const projetosrRepository = getCustomRepository(PagamentoViewRepository);

        const user = await projetosrRepository.find({});

        return user;
    }
}

export default LoadPagamentoSummaryService;
