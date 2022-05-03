import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Atividades from '../../../typeorm/entities/Atividades';
import AtividadeRepository from '../../../typeorm/repositories/AtividadeRepository'




interface IRequestDTO {
  uuidatividade: string;
  atividade:string;
  cod_atv:string;


  }

  class CreateClientesService {

    public async create({ uuidatividade,atividade,cod_atv}: IRequestDTO): Promise<Atividades | Error> {

      const Repository = getCustomRepository(AtividadeRepository);

      const result = await Repository.findById(uuidatividade);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  Repository.create({

        uuidatividade,atividade,cod_atv

      });

      await Repository.save(cliet);

      return cliet;
    }
  }

  export default CreateClientesService;
