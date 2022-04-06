import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Departamento from '../../typeorm/entities/Departamento';
import DepartamentoRepository from '../../typeorm/repositories/DepartamentoRepository'




interface IRequestDTO {
  uuiddeparta: string;
  departamento:string;


  }

  class CreateClientesService {

    public async execute({ uuiddeparta,departamento}: IRequestDTO): Promise<Departamento | Error> {

      const clientesRepository = getCustomRepository(DepartamentoRepository);

      const checkUserExists = await clientesRepository.findById(uuiddeparta);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  clientesRepository.create({

        uuiddeparta,departamento

      });

      await clientesRepository.save(cliet);

      return cliet;
    }
  }

  export default CreateClientesService;
