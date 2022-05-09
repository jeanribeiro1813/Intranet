import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Dias from '../../../../shared/infra/typeorm/entities/Dias';
import DiasRepository from '../../../../shared/infra/typeorm/repositories/DiasRepository'




interface IRequestDTO {

  uuiddiasuteis: string;
  ano:string;
  mes: string;
  codigo: string;
  dias: string;

  }

  class CreateDiasService {

    public async create({ uuiddiasuteis,ano,mes,codigo,dias}: IRequestDTO): Promise< Dias | AppError> {

      const Repository = getCustomRepository(DiasRepository);

      const result = await Repository.findById(uuiddiasuteis);

      if (result) {
        throw new AppError('Não existe.',404);

      }

      const dia =  Repository.create({

        uuiddiasuteis,ano,mes,codigo,dias

      });

      await Repository.save(dia);

      return dia;
    }
  }

  export default CreateDiasService;
