import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Atividades from '../../typeorm/entities/Atividades';
import AtividadeRepository from '../../typeorm/repositories/AtividadeRepository'




interface IRequestDTO {
  uuidativida: string;
  atividade:string;
  cod_atv:string;


  }

  class CreateClientesService {

    public async execute({ uuidativida,atividade,cod_atv}: IRequestDTO): Promise<Atividades | Error> {

      const clientesRepository = getCustomRepository(AtividadeRepository);

      const checkUserExists = await clientesRepository.findById(uuidativida);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  clientesRepository.create({

        uuidativida,atividade,cod_atv

      });

      await clientesRepository.save(cliet);

      return cliet;
    }
  }

  export default CreateClientesService;
