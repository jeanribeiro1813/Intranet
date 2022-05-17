import Pagamento from '../../../../shared/infra/typeorm/entities/Pagamento';
import PagamentoRepository from '../../../../shared/infra/typeorm/repositories/PagamentoRepository'
import AppError from '../../../../shared/errors/AppErrors';
import {injectable, inject} from 'tsyringe'


interface IResponseDTO {

    uuidpagamento: string;

}

@injectable()
class LoadIndexService {

    constructor(
        @inject('PagamentoRepository')
        private PagamentoRepository: PagamentoRepository){
        
      }
      
    public async index ({uuidpagamento}:IResponseDTO): Promise< Pagamento | AppError > {

        const projetos = await this.PagamentoRepository.findById(uuidpagamento);

        if(!projetos){
            throw new AppError("Não Existe esse projeto",409);
            
        }

        return projetos;
    }
}

export default LoadIndexService;
