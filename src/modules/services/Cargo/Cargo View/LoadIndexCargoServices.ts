import { getCustomRepository } from "typeorm";
import Cargo from '../../../../shared/infra/typeorm/entities/Cargo'
import CargoRepository from '../../../../shared/infra/typeorm/repositories/CargoRepository'
import AppError from "../../../../shared/errors/AppErrors";
import {injectable, inject} from 'tsyringe'


interface IRequestDTO{

    uuidcargo:string;
}

@injectable()
class LoadIndexCargo {

  constructor(
    @inject('CargoRepository')
    private cargoeRepository: CargoRepository){
    
  }
    public async index ({uuidcargo}:IRequestDTO): Promise<Cargo | AppError> {

        const Repository = getCustomRepository(CargoRepository);

        const result = await this.cargoeRepository.findById(uuidcargo);

        if(!result){
            throw new AppError('Departamento não encontrado',409)
        }

        return result;
    }
}

export default LoadIndexCargo;
