import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Departamento from '../../typeorm/entities/Departamento';
import DepartamentoRepository from '../../typeorm/repositories/DepartamentoRepository'



interface IRequestDTO {

  coddeparta: string;
  departamento:string;

  }

  class UpdateClientService {

    public async update({coddeparta,departamento}: IRequestDTO): Promise<Departamento | Error> {

      const usersRepository = getCustomRepository(DepartamentoRepository);

      const client = await usersRepository.findOne(coddeparta);

      if (!client) {
        throw new AppError ('client não existe',404);
      }


      client.departamento = departamento ? departamento : client.departamento;

      await usersRepository.save(client);

      return client;
    }
  }

  export default UpdateClientService;
