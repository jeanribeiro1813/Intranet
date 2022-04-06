import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Funcionarios from '../../typeorm/entities/Funcionarios';
import FuncionarioRepository from '../../typeorm/repositories/FuncionarioRepository'



interface IRequestDTO {

  cod_func_uuid: string;
  cod_cargo:number;
  cod_usuario: number;
  cod_func: number;


  }

  class UpdateClientService {

    public async update({cod_func_uuid,cod_cargo,cod_usuario,cod_func}: IRequestDTO): Promise<Funcionarios | Error> {

      const usersRepository = getCustomRepository(FuncionarioRepository);

      const client = await usersRepository.findOne(cod_func_uuid);

      if (!client) {
        throw new AppError ('client não existe',404);
      }


      client.cod_cargo = cod_cargo ? cod_cargo : client.cod_cargo;
      client.cod_usuario = cod_usuario ? cod_usuario : client.cod_usuario;
      client.cod_func = cod_func ? cod_func : client.cod_func;

  

      await usersRepository.save(client);

      return client;
    }
  }

  export default UpdateClientService;
