import { getCustomRepository } from 'typeorm'

import Cargo from '../../typeorm/entities/Cargo'
import CargoRepository from '../../typeorm/repositories/CargoRepository'

interface IRequestDTO {
    id: any;
}

class LoadCargoByIdService{
    public async execute ({id}:IRequestDTO): Promise<Cargo | undefined> {
        
        const cargoRepository = getCustomRepository(CargoRepository);

        const funcao = await cargoRepository.findOne({
            id
        });

        const responseDTO = funcao;

        return responseDTO;
    }
}

export default LoadCargoByIdService;