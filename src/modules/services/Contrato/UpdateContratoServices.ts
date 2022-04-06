import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Contrato from '../../typeorm/entities/Contrato';
import ContratoRepository from '../../typeorm/repositories/ContratoRepository'



interface IRequestDTO {

  uuidcontrato: string;
  contrato:string;


  }

  class UpdateClientService {

    public async update({uuidcontrato,contrato}: IRequestDTO): Promise<Contrato | Error> {

      const usersRepository = getCustomRepository(ContratoRepository);

      const client = await usersRepository.findOne(uuidcontrato);

      if (!client) {
        throw new AppError ('client não existe',404);
      }


      client.contrato = contrato ? contrato : client.contrato;

  

      await usersRepository.save(client);

      return client;
    }
  }

  export default UpdateClientService;
