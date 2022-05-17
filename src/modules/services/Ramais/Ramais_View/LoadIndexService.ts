import { getCustomRepository } from "typeorm";
import Ramais from '../../../../shared/infra/typeorm/entities/Ramais';
import RamaisRepository from '../../../../shared/infra/typeorm/repositories/RamaisRepository'
import AppError from '../../../../shared/errors/AppErrors';
import {injectable, inject} from 'tsyringe'


interface IResponseDTO {

    cuuidramal: string;
 


}


@injectable()
class LoadIndexService {

    constructor(
        @inject('RamaisRepository')
        private ramaisRepository: RamaisRepository){
        
      }

      public async index ({cuuidramal}:IResponseDTO): Promise< Ramais | AppError > {

        const result = await this.ramaisRepository.findById(cuuidramal);

        if(!result){
            throw new AppError("Não Existe esse projeto",409);
            
        }

        return result;
    }
}

export default LoadIndexService;
