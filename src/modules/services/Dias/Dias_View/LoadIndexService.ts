import { getCustomRepository } from "typeorm";
import Dias from '../../../../shared/infra/typeorm/entities/Dias';
import DiasRepository from '../../../../shared/infra/typeorm/repositories/DiasRepository'
import AppError from '../../../../shared/errors/AppErrors';
import {injectable, inject} from 'tsyringe'



interface IResponseDTO {

    uuiddiasuteis: string;

}

@injectable()
class LoadIndexService {

constructor(
  @inject('DiasRepository')
  private diasRepository: DiasRepository){
  
}

    public async index ({uuiddiasuteis}:IResponseDTO): Promise< Dias | AppError > {

        const result = await this.diasRepository.findById(uuiddiasuteis);

        if(!result){
            throw new AppError("Não Existe ",409);
            
        }

        return result;
    }
}

export default LoadIndexService;
