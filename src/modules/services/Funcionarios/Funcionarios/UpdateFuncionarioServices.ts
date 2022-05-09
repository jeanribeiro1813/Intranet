import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Funcionarios from '../../../../shared/infra/typeorm/entities/Funcionarios';
import FuncionarioRepository from '../../../../shared/infra/typeorm/repositories/FuncionarioRepository'



interface IRequestDTO {

  cod_func_uuid: string;
  cod_cargo:number;
  cod_usuario: number;
  cod_func: number;


  }

  class UpdateClientService {

    public async update({cod_func_uuid,cod_cargo,cod_usuario,cod_func}: IRequestDTO): Promise<Funcionarios | Error> {

      const Repository = getCustomRepository(FuncionarioRepository);

      const result = await Repository.findOne(cod_func_uuid);

      if (!result) {
        throw new AppError ('client não existe',404);
      }


      result.cod_cargo = cod_cargo ? cod_cargo : result.cod_cargo;
      result.cod_usuario = cod_usuario ? cod_usuario : result.cod_usuario;
      result.cod_func = cod_func ? cod_func : result.cod_func;

  

      await Repository.save(result);

      return result;
    }
  }

  export default UpdateClientService;
