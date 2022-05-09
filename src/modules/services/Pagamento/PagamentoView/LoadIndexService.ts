import { getCustomRepository } from "typeorm";
import Pagamento from '../../../../shared/infra/typeorm/entities/Pagamento';
import PagamentoRepository from '../../../../shared/infra/typeorm/repositories/PagamentoRepository'
import AppError from '../../../../shared/errors/AppErrors';


interface IResponseDTO {

    uuidpagamento: string;

}

class LoadIndexService{
    public async index ({uuidpagamento}:IResponseDTO): Promise< Pagamento | AppError > {

        const projetosrRepository = getCustomRepository(PagamentoRepository);

        const projetos = await projetosrRepository.findByCode(uuidpagamento);

        if(!projetos){
            throw new AppError("Não Existe esse projeto",409);
            
        }

        return projetos;
    }
}

export default LoadIndexService;
