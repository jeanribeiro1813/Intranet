import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Funcionarios from '../../typeorm/entities/Funcionarios';
import FuncionarioRepository from '../../typeorm/repositories/FuncionarioRepository'




interface IRequestDTO {
  cod_func_uuid: string;
  cod_cargo:number;
  cod_usuario: number;
  cod_func: number;


  }

  class CreateClientesService {

    public async execute({ cod_func_uuid,cod_cargo,cod_usuario,cod_func}: IRequestDTO): Promise<Funcionarios | Error> {

      const clientesRepository = getCustomRepository(FuncionarioRepository);

      const checkUserExists = await clientesRepository.findById(cod_func_uuid);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  clientesRepository.create({

        cod_func_uuid, cod_cargo ,cod_usuario ,cod_func

      });

      await clientesRepository.save(cliet);

      return cliet;
    }
  }

  export default CreateClientesService;
