import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Departamento from '../../typeorm/entities/Departamento';
import DepartamentoRepository from '../../typeorm/repositories/DepartamentoRepository'




interface IRequestDTO {
  coddeparta: string;
  departamento:string;


  }

  class CreateClientesService {

    public async execute({ coddeparta,departamento}: IRequestDTO): Promise<Departamento | Error> {

      const clientesRepository = getCustomRepository(DepartamentoRepository);

      const checkUserExists = await clientesRepository.findById(coddeparta);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  clientesRepository.create({

        coddeparta,departamento

      });

      await clientesRepository.save(cliet);

      return cliet;
    }
  }

  export default CreateClientesService;
