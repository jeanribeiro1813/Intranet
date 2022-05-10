import { getCustomRepository } from "typeorm";
import ProjetosViewRepository from '../../../../shared/infra/typeorm/repositories/ProjetosViewRepository';
import ProjetosView from '../../../../shared/infra/typeorm/entities/ProjetosView';



class LoadProjetoSummaryService{
    public async executeDes (): Promise<ProjetosView[]> {
        const projetosrRepository = getCustomRepository(ProjetosViewRepository);

        const user = await projetosrRepository.find();

        return user;
    }
}

export default LoadProjetoSummaryService;
