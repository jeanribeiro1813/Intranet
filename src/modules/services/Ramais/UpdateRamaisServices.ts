import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Ramais from '../../typeorm/entities/Ramais';
import RamaisRepository from '../../typeorm/repositories/RamaisRepository'



interface IRequestDTO {

  uuidramal: string;
  ramal:number;
  cod_atv:string;

  

  }

  class UpdateRamaiservice {

    public async update({ uuidramal,ramal,cod_atv}: IRequestDTO): Promise<Ramais | Error> {

      const usersRepository = getCustomRepository(RamaisRepository);

      const client = await usersRepository.findOne(uuidramal);

      if (!client) {
        throw new AppError ('client não existe',404);
      }


      client.ramal = ramal ? ramal : client.ramal;
      client.cod_atv = cod_atv ? cod_atv : client.cod_atv;

      await usersRepository.save(client);

      return client;
    }
  }

  export default UpdateRamaiservice;
