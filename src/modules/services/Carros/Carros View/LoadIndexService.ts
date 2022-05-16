import AppError from "../../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Carros from '../../../../shared/infra/typeorm/entities/Carros';
import CarrosRepository from '../../../../shared/infra/typeorm/repositories/CarrosRepository'
import {injectable, inject} from 'tsyringe'


interface IResponseDTO {

    id_uuid: string;  

}

@injectable()
class LoadClientesSummaryService {

  constructor(
    @inject('CarrosRepository')
    private carrosRepository: CarrosRepository){
    
  }

    public async index ({id_uuid}:IResponseDTO): Promise< Carros| AppError> {

        const result = await this.carrosRepository.findById(id_uuid)

        
        if(!result){
            throw new AppError ('Codigo de atividade não encontrado',404)
        }

        return result;
    }
}

export default LoadClientesSummaryService;
