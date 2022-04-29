import { getCustomRepository } from "typeorm";
import PagamentoView from '../../../typeorm/entities/PagamentoView';
import PagamentoViewRepository from '../../../typeorm/repositories/PagamentoViewRepository'
import AppError from '../../../../shared/errors/AppErrors';


interface IResponseDTO {

    uuidpagamento: string;

}





class LoadIndexService{
    public async index ({uuidpagamento}:IResponseDTO): Promise< PagamentoView | AppError > {

        const projetosrRepository = getCustomRepository(PagamentoViewRepository);

        const projetos = await projetosrRepository.findByCode({uuidpagamento});

        if(!projetos){
            throw new AppError("Não Existe esse projeto",409);
            
        }

        return projetos;
    }
}

export default LoadIndexService;
