import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Ramais from '../../typeorm/entities/Ramais';
import RamaisRepository from '../../typeorm/repositories/RamaisRepository'




interface IRequestDTO {
  uuidramal: string;
  ramal:number;
  cod_atv:string;


  }

  class CreateRamaisService {

    public async execute({ uuidramal,ramal,cod_atv}: IRequestDTO): Promise<Ramais | Error> {

      const ramaisRepository = getCustomRepository(RamaisRepository);

      const checkRamaisExists = await ramaisRepository.findById(uuidramal);

      if (checkRamaisExists) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  ramaisRepository.create({

        uuidramal,ramal,cod_atv

      });

      await ramaisRepository.save(cliet);

      return cliet;
    }
  }

  export default CreateRamaisService;
