import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Reserva from '../../typeorm/entities/Reserva';
import ReservaRepository from '../../typeorm/repositories/ReservaRepository'




interface IRequestDTO {

  cod_reserva_uuid: string;
  placa:string;
  usuario: string;
  dt_saida: string;
  dt_chegada: string;
  hora_saida:string;
  hora_chegada: string;
  km_saida: number;
  km_chegada: string;
  projeto: string;
  cancelado:number;
  desc_cancel: string;
  dt_cancel: string;
  dev_obs: string;
  cod_reserva: number;
 
  }

  class CreateReservaService {

    public async execute({ cod_reserva_uuid,placa,usuario,dt_saida,
      dt_chegada,hora_saida,hora_chegada,km_saida,
      km_chegada,projeto,cancelado,desc_cancel,dev_obs,cod_reserva}: IRequestDTO): Promise<Reserva | Error> {

      const clientesRepository = getCustomRepository(ReservaRepository);

      const checkUserExists = await clientesRepository.findById(cod_reserva_uuid);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  clientesRepository.create({

        cod_reserva_uuid,placa,usuario,dt_saida,
        dt_chegada,hora_saida,hora_chegada,km_saida,
        km_chegada,projeto,cancelado,desc_cancel,dev_obs,cod_reserva

      });

      await clientesRepository.save(cliet);

      return cliet;
    }
  }

  export default CreateReservaService;
