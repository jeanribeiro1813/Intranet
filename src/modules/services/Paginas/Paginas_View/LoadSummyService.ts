import Pagina from "@shared/infra/typeorm/entities/Paginas";
import { getCustomRepository } from "typeorm";
import PaginaRepository from '../../../../shared/infra/typeorm/repositories/PaginaRepository'
import AppError from '../../../../shared/errors/AppErrors';

class LoadPagamentoSummaryService{
    public async executeDes (): Promise<Pagina []| AppError> {
        
        const projetosrRepository = getCustomRepository(PaginaRepository);

        const user = await projetosrRepository.find({});

        return user;
    }
}

export default LoadPagamentoSummaryService;
