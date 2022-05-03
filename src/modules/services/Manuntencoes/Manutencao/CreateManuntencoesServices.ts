import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Manutencoes from '../../../typeorm/entities/Manutencoes';
import ManuntencoesRepository from '../../../typeorm/repositories/ManuntencoesRepository'




interface IRequestDTO {
  cod_manutencao_uuid: string;
  descricao:string;
  valor: string;
  cod_manutencao: number;


  }

  class CreateManuntencoesService {

    public async create({ cod_manutencao_uuid,descricao,valor,cod_manutencao}: IRequestDTO): Promise<Manutencoes | Error> {

      const Repository = getCustomRepository(ManuntencoesRepository);

      const result = await Repository.findById(cod_manutencao_uuid);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  Repository.create({

        cod_manutencao_uuid,descricao,valor,cod_manutencao

      });

      await Repository.save(cliet);

      return cliet;
    }
  }

  export default CreateManuntencoesService;
