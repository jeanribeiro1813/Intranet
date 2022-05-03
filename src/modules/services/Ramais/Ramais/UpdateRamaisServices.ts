import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Ramais from '../../../typeorm/entities/Ramais';
import RamaisRepository from '../../../typeorm/repositories/RamaisRepository'



interface IRequestDTO {

  uuidramal: string;
  ramal:number;
  cod_atv:string;

  

  }

  class UpdateRamaiservice {

    public async update({ uuidramal,ramal,cod_atv}: IRequestDTO): Promise<Ramais | Error> {

      const Repository = getCustomRepository(RamaisRepository);

      const result = await Repository.findOne(uuidramal);

      if (!result) {
        throw new AppError ('client não existe',404);
      }


      result.ramal = ramal ? ramal : result.ramal;
      result.cod_atv = cod_atv ? cod_atv : result.cod_atv;

      await Repository.save(result);

      return result;
    }
  }

  export default UpdateRamaiservice;
