import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Manutencoes from '../../typeorm/entities/Manutencoes';
import ManuntencoesRepository from '../../typeorm/repositories/ManuntencoesRepository'




interface IRequestDTO {
  cod_manutencao_uuid: string;
  descricao:string;
  valor: string;
  cod_manutencao: number;


  }

  class CreateManuntencoesService {

    public async execute({ cod_manutencao_uuid,descricao,valor,cod_manutencao}: IRequestDTO): Promise<Manutencoes | Error> {

      const clientesRepository = getCustomRepository(ManuntencoesRepository);

      const checkUserExists = await clientesRepository.findById(cod_manutencao_uuid);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  clientesRepository.create({

        cod_manutencao_uuid,descricao,valor,cod_manutencao

      });

      await clientesRepository.save(cliet);

      return cliet;
    }
  }

  export default CreateManuntencoesService;
