import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Cargo from '../../typeorm/entities/Cargo';
import CargoRepository from '../../typeorm/repositories/CargoRepository'



interface IRequestDTO {
  uuidcargo: string;
  cargo:string;
  cod_cargo:number;
  }

  class UpdateCargoService {

    public async update({uuidcargo,cargo, cod_cargo}: IRequestDTO): Promise<Cargo | Error> {

      const usersRepository = getCustomRepository(CargoRepository);

      const cargoService = await usersRepository.findOne(uuidcargo);

      if (!cargoService) {
        throw new AppError ('cargo não existe',404);
      }


     
      cargoService.cargo = cargo ? cargo : cargoService.cargo;
      cargoService.cod_cargo = cod_cargo ? cod_cargo: cargoService.cod_cargo



      await usersRepository.save(cargoService);

      return cargoService;
    }
  }

  export default UpdateCargoService;
