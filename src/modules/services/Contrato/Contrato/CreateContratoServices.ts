import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Contrato from '../../../typeorm/entities/Contrato';
import ContratoRepository from '../../../typeorm/repositories/ContratoRepository'




interface IRequestDTO {

  uuidcontrato: string;
  contrato:string;



  }

  class CreateClientesService {

    public async create({ uuidcontrato,contrato}: IRequestDTO): Promise<Contrato | Error> {

      const Repository = getCustomRepository(ContratoRepository);

      const result = await Repository.findById(uuidcontrato);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  Repository.create({

        uuidcontrato,contrato

      });

      await Repository.save(cliet);

      return cliet;
    }
  }

  export default CreateClientesService;
