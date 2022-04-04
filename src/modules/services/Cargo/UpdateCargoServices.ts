import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Cargo from '../../typeorm/entities/Cargo';
import CargoRepository from '../../typeorm/repositories/CargoRepository'



interface IRequestDTO {
  cod_cargo_uuid: string;
  desc_cargo:string;
  cod_cargo:number;
  }

  class UpdateCargoService {

    public async update({cod_cargo_uuid,desc_cargo, cod_cargo}: IRequestDTO): Promise<Cargo | Error> {

      const usersRepository = getCustomRepository(CargoRepository);

      const cargo = await usersRepository.findOne(cod_cargo_uuid);

      if (!cargo) {
        throw new AppError ('cargo não existe',404);
      }


      cargo.desc_cargo = desc_cargo ? desc_cargo : cargo.desc_cargo;
      cargo.cod_cargo = cod_cargo ? cod_cargo : cargo.cod_cargo;



      await usersRepository.save(cargo);

      return cargo;
    }
  }

  export default UpdateCargoService;
