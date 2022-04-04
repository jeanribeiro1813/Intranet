import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Cargo from '../../typeorm/entities/Cargo';
import CargoRepository from '../../typeorm/repositories/CargoRepository'




interface IRequestDTO {
  cod_cargo_uuid: string;
  desc_cargo:string;
  cod_cargo:number;


  }

  class CreateCargoService {

    public async execute({ cod_cargo_uuid,desc_cargo, cod_cargo}: IRequestDTO): Promise<Cargo | Error> {

      const cargoRepository = getCustomRepository(CargoRepository);

      const checkUserExists = await cargoRepository.findByCod(cod_cargo_uuid);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const cargo =  cargoRepository.create({
        desc_cargo , cod_cargo


      });

      await cargoRepository.save(cargo);

      return cargo;
    }
  }

  export default CreateCargoService;
