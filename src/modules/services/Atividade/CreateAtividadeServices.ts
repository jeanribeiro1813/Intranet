import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Atividades from '../../typeorm/entities/Atividades';
import AtividadeRepository from '../../typeorm/repositories/AtividadeRepository'




interface IRequestDTO {
  codativida: string;
  atividade:string;


  }

  class CreateClientesService {

    public async execute({ codativida,atividade}: IRequestDTO): Promise<Atividades | Error> {

      const clientesRepository = getCustomRepository(AtividadeRepository);

      const checkUserExists = await clientesRepository.findById(codativida);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  clientesRepository.create({

        codativida,atividade

      });

      await clientesRepository.save(cliet);

      return cliet;
    }
  }

  export default CreateClientesService;
