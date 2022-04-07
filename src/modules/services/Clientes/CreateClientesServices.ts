import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Clientes from '../../typeorm/entities/Clientes';
import ClientesRepository from '../../typeorm/repositories/ClientesRepository'




interface IRequestDTO {
  uuidcliente: string;
  projeto:string;
  cliente:string;


  }

  class CreateClientesService {

    public async execute({ uuidcliente,projeto, cliente}: IRequestDTO): Promise<Clientes | Error> {

      const clientesRepository = getCustomRepository(ClientesRepository);

      const checkUserExists = await clientesRepository.findById(uuidcliente);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  clientesRepository.create({

        projeto, cliente


      });

      await clientesRepository.save(cliet);

      return cliet;
    }
  }

  export default CreateClientesService;
