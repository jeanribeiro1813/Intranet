import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Funcionarios from '../../../../shared/infra/typeorm/entities/Funcionarios';
import FuncionarioRepository from '../../../../shared/infra/typeorm/repositories/FuncionarioRepository'




interface IRequestDTO {
  cod_func_uuid: string;
  cod_cargo:number;
  cod_usuario: number;
  cod_func: number;


  }

  class CreateClientesService {

    public async create({ cod_func_uuid,cod_cargo,cod_usuario,cod_func}: IRequestDTO): Promise<Funcionarios | Error> {

      const Repository = getCustomRepository(FuncionarioRepository);

      const result = await Repository.findById(cod_func_uuid);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  Repository.create({

        cod_func_uuid, cod_cargo ,cod_usuario ,cod_func

      });

      await Repository.save(cliet);

      return cliet;
    }
  }

  export default CreateClientesService;
