import { getCustomRepository } from "typeorm";
import Cargo from '../../typeorm/entities/Cargo'
import CargoRepository from '../../typeorm/repositories/CargoRepository'
import AppError from "../../../shared/errors/AppErrors";


interface IRequestDTO{

    uuidcargo:string;
}

class LoadIndexCargo{
    public async index ({uuidcargo}:IRequestDTO): Promise<Cargo | AppError> {

        const cargoRepository = getCustomRepository(CargoRepository);

        const cargo = await cargoRepository.findByCod(uuidcargo);

        if(!cargo){
            throw new AppErrors('Departamento não encontrado',409)
        }

        return cargo;
    }
}

export default LoadIndexCargo;
