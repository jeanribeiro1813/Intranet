import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Atividades from '../../typeorm/entities/Atividades';
import AtividadeRepository from '../../typeorm/repositories/AtividadeRepository'



interface IRequestDTO {

  uuidativida: string;
  atividade:string;
  cod_atv:string;

  }

  class UpdateClientService {

    public async update({uuidativida,atividade,cod_atv}: IRequestDTO): Promise<Atividades | Error> {

      const usersRepository = getCustomRepository(AtividadeRepository);

      const client = await usersRepository.findOne(uuidativida);

      if (!client) {
        throw new AppError ('client não existe',404);
      }


      client.atividade = atividade ? atividade : client.atividade;
      client.cod_atv = cod_atv ? cod_atv : client.cod_atv;

      await usersRepository.save(client);

      return client;
    }
  }

  export default UpdateClientService;
