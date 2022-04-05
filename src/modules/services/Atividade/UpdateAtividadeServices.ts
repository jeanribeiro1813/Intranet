import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Atividades from '../../typeorm/entities/Atividades';
import AtividadeRepository from '../../typeorm/repositories/AtividadeRepository'



interface IRequestDTO {

  codativida: string;
  atividade:string;

  }

  class UpdateClientService {

    public async update({codativida,atividade}: IRequestDTO): Promise<Atividades | Error> {

      const usersRepository = getCustomRepository(AtividadeRepository);

      const client = await usersRepository.findOne(codativida);

      if (!client) {
        throw new AppError ('client não existe',404);
      }


      client.atividade = atividade ? atividade : client.atividade;

      await usersRepository.save(client);

      return client;
    }
  }

  export default UpdateClientService;
