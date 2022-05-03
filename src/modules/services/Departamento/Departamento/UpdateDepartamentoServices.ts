import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Departamento from '../../../typeorm/entities/Departamento';
import DepartamentoRepository from '../../../typeorm/repositories/DepartamentoRepository'



interface IRequestDTO {

  uuiddeparta: string;
  departamento:string;

  }

  class UpdateClientService {

    public async update({uuiddeparta,departamento}: IRequestDTO): Promise<Departamento | Error> {

      const Repository = getCustomRepository(DepartamentoRepository);

      const result = await Repository.findOne(uuiddeparta);

      if (!result) {
        throw new AppError ('client não existe',404);
      }


      result.departamento = departamento ? departamento : result.departamento;

      await Repository.save(result);

      return result;
    }
  }

  export default UpdateClientService;
