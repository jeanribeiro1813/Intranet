import { getCustomRepository } from "typeorm";
import Cargo from '../../../../shared/infra/typeorm/entities/Cargo'
import CargoRepository from '../../../../shared/infra/typeorm/repositories/CargoRepository'
import AppError from "../../../../shared/errors/AppErrors";


interface IRequestDTO{

    uuidcargo:string;
}

class LoadIndexCargo{
    public async index ({uuidcargo}:IRequestDTO): Promise<Cargo | AppError> {

        const Repository = getCustomRepository(CargoRepository);

        const result = await Repository.findByCod(uuidcargo);

        if(!result){
            throw new AppError('Departamento não encontrado',409)
        }

        return result;
    }
}

export default LoadIndexCargo;
