import AppError from "../../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Atividades from '../../../../shared/infra/typeorm/entities/Atividades';
import AtividadeRepository from '../../../../shared/infra/typeorm/repositories/AtividadeRepository'
import {injectable, inject} from 'tsyringe'



interface IResponseDTO {

    uuidatividade: string;  

}


@injectable()
class LoadClientesSummaryService {

    constructor(
        @inject('AtividadeRepository')
        private atividadeRepository: AtividadeRepository){
        
      }
  

    public async index ({uuidatividade}:IResponseDTO): Promise< Atividades| AppError> {


        const result = await this.atividadeRepository.findById(uuidatividade)

        
        if(!result){
            throw new AppError ('Codigo de atividade não encontrado',404)
        }

        return result;
    }
}

export default LoadClientesSummaryService;
