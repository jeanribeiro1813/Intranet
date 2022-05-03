import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Reserva from '../../../typeorm/entities/Reserva';
import ReservaRepository from '../../../typeorm/repositories/ReservaRepository'




interface IRequestDTO {

  cod_reserva_uuid: string;
  placa:string;
  usuario: string;
  dt_saida: string;
  dt_chegada: string;
  hora_saida:string;
  hora_chegada: string;
  km_saida: string;
  km_chegada: string;
  projeto: string;
  cancelado:number;
  desc_cancel: string;
  dt_cancel: string;
  dev_obs: string;
  cod_reserva: number;
 
  }

  class CreateReservaService {

    public async create({ cod_reserva_uuid,placa,usuario,dt_saida,
      dt_chegada,hora_saida,hora_chegada,km_saida,
      km_chegada,projeto,cancelado,desc_cancel,dev_obs,cod_reserva}: IRequestDTO): Promise<Reserva | Error> {

      const Repository = getCustomRepository(ReservaRepository);

      const result = await Repository.findById(cod_reserva_uuid);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  Repository.create({

        cod_reserva_uuid,placa,usuario,dt_saida,
        dt_chegada,hora_saida,hora_chegada,km_saida,
        km_chegada,projeto,cancelado,desc_cancel,dev_obs,cod_reserva

      });

      await Repository.save(cliet);

      return cliet;
    }
  }

  export default CreateReservaService;
