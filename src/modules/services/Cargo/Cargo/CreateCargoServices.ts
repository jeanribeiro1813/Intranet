import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Cargo from '../../../../shared/infra/typeorm/entities/Cargo';
import CargoRepository from '../../../../shared/infra/typeorm/repositories/CargoRepository'




interface IRequestDTO {
  uuidcargo: string;
  cargo:string;
  cod_cargo:number;


  }

  class CreateCargoService {

    public async execute({ uuidcargo,cargo, cod_cargo}: IRequestDTO): Promise<Cargo | Error> {

      const Repository = getCustomRepository(CargoRepository);

      const result = await Repository.findByCod(uuidcargo);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cargoService =  Repository.create({
        cargo , cod_cargo


      });

      await Repository.save(cargoService);

      return cargoService;
    }
  }

  export default CreateCargoService;
