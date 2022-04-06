import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Contrato from '../../typeorm/entities/Contrato';
import ContratoRepository from '../../typeorm/repositories/ContratoRepository'




interface IRequestDTO {

  uuidcontrato: string;
  contrato:string;



  }

  class CreateClientesService {

    public async execute({ uuidcontrato,contrato}: IRequestDTO): Promise<Contrato | Error> {

      const clientesRepository = getCustomRepository(ContratoRepository);

      const checkUserExists = await clientesRepository.findById(uuidcontrato);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  clientesRepository.create({

        uuidcontrato,contrato

      });

      await clientesRepository.save(cliet);

      return cliet;
    }
  }

  export default CreateClientesService;
