import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Clientes from '../../typeorm/entities/Clientes';
import ClientesRepository from '../../typeorm/repositories/ClientesRepository'



interface IRequestDTO {
  id: string;
  projeto:string;
  cliente:string;

  }

  class UpdateClientService {

    public async update({id,projeto, cliente}: IRequestDTO): Promise<Clientes | Error> {

      const usersRepository = getCustomRepository(ClientesRepository);

      const client = await usersRepository.findOne(id);

      if (!client) {
        throw new AppError ('client não existe',404);
      }


      client.projeto = projeto ? projeto : client.projeto;
      client.cliente = cliente ? cliente : client.cliente;

      await usersRepository.save(client);

      return client;
    }
  }

  export default UpdateClientService;
