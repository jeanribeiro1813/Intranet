import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Departamento from '../../../typeorm/entities/Departamento';
import DepartamentoRepository from '../../../typeorm/repositories/DepartamentoRepository'




interface IRequestDTO {
  uuiddeparta: string;
  departamento:string;


  }

  class CreateClientesService {

    public async execute({ uuiddeparta,departamento}: IRequestDTO): Promise<Departamento | Error> {

      const Repository = getCustomRepository(DepartamentoRepository);

      const result = await Repository.findById(uuiddeparta);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  Repository.create({

        uuiddeparta,departamento

      });

      await Repository.save(cliet);

      return cliet;
    }
  }

  export default CreateClientesService;
