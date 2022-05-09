import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Clientes from '../../../../shared/infra/typeorm/entities/Clientes';
import ClientesRepository from '../../../../shared/infra/typeorm/repositories/ClientesRepository'




interface IRequestDTO {
  uuidcliente: string;
  projeto:string;
  cliente:string;


  }

  class CreateClientesService {

    public async create({ uuidcliente,projeto, cliente}: IRequestDTO): Promise<Clientes | Error> {

      const Repository = getCustomRepository(ClientesRepository);

      const result = await Repository.findById(uuidcliente);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  Repository.create({

        projeto, cliente


      });

      await Repository.save(cliet);

      return cliet;
    }
  }

  export default CreateClientesService;
