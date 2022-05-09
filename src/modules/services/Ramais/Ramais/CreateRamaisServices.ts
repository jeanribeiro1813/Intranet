import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Ramais from '../../../../shared/infra/typeorm/entities/Ramais';
import RamaisRepository from '../../../../shared/infra/typeorm/repositories/RamaisRepository'




interface IRequestDTO {
  uuidramal: string;
  ramal:number;
  cod_atv:string;


  }

  class CreateRamaisService {

    public async create({ uuidramal,ramal,cod_atv}: IRequestDTO): Promise<Ramais | Error> {

      const Repository = getCustomRepository(RamaisRepository);

      const result = await Repository.findById(uuidramal);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  Repository.create({

        uuidramal,ramal,cod_atv

      });

      await Repository.save(cliet);

      return cliet;
    }
  }

  export default CreateRamaisService;
