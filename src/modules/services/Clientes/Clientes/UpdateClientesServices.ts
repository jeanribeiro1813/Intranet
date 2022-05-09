import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Clientes from '../../../../shared/infra/typeorm/entities/Clientes';
import ClientesRepository from '../../../../shared/infra/typeorm/repositories/ClientesRepository'



interface IRequestDTO {
  uuidcliente: string;
  projeto:string;
  cliente:string;

  }

  class UpdateClientService {

    public async update({uuidcliente,projeto, cliente}: IRequestDTO): Promise<Clientes | Error> {

      const Repository = getCustomRepository(ClientesRepository);

      const result = await Repository.findOne(uuidcliente);

      if (!result) {
        throw new AppError ('client não existe',404);
      }


      result.projeto = projeto ? projeto : result.projeto;
      result.cliente = cliente ? cliente : result.cliente;

      await Repository.save(result);

      return result;
    }
  }

  export default UpdateClientService;
