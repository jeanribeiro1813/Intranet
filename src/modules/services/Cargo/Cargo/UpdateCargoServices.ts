import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Cargo from '../../../typeorm/entities/Cargo';
import CargoRepository from '../../../typeorm/repositories/CargoRepository'



interface IRequestDTO {
  uuidcargo: string;
  cargo:string;
  cod_cargo:number;
  }

  class UpdateCargoService {

    public async update({uuidcargo,cargo, cod_cargo}: IRequestDTO): Promise<Cargo | Error> {

      const Repository = getCustomRepository(CargoRepository);

      const result = await Repository.findOne(uuidcargo);

      if (!result) {
        throw new AppError ('cargo não existe',404);
      }


     
      result.cargo = cargo ? cargo : result.cargo;
      result.cod_cargo = cod_cargo ? cod_cargo: result.cod_cargo



      await Repository.save(result);

      return result;
    }
  }

  export default UpdateCargoService;
