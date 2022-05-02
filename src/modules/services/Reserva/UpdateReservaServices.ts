import { getCustomRepository,getRepository } from 'typeorm'
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
  km_saida: string;
  km_chegada: string;
  projeto: string;
  cancelado:number;
  desc_cancel: string;
  dt_cancel: string;
  dev_obs: string;
  cod_reserva: number;


  }

  class UpdateReservaService {

    public async update({cod_reserva_uuid,placa,usuario,dt_saida,
      dt_chegada,hora_saida,hora_chegada,km_saida,
      km_chegada,projeto,cancelado,desc_cancel,dev_obs,cod_reserva}: IRequestDTO): Promise<Reserva | Error> {

      const usersRepository = getCustomRepository(ReservaRepository);

      const reserva = await usersRepository.findOne(cod_reserva_uuid);

      if (!reserva) {
        throw new AppError ('reserva não existe',404);
      }


      reserva.placa = placa ? placa : reserva.placa;
      reserva.usuario = usuario ? usuario : reserva.usuario;
      reserva.dt_saida = dt_saida ? dt_saida : reserva.dt_saida;
      reserva.dt_chegada = dt_chegada ? dt_chegada : reserva.dt_chegada;
      reserva.hora_saida = hora_saida ? hora_saida : reserva.hora_saida;
      reserva.hora_chegada = hora_chegada ? hora_chegada : reserva.hora_chegada;
      reserva.km_saida = km_saida ? km_saida : reserva.km_saida;
      reserva.km_chegada = km_chegada ? km_chegada : reserva.km_chegada;
      reserva.projeto = projeto ? projeto : reserva.projeto;
      reserva.cancelado = cancelado ? cancelado : reserva.cancelado;
      reserva.desc_cancel = desc_cancel ? desc_cancel : reserva.desc_cancel;
      reserva.dev_obs = dev_obs ? dev_obs : reserva.dev_obs;
      reserva.cod_reserva = cod_reserva ? cod_reserva : reserva.cod_reserva;
     
  

      await usersRepository.save(reserva);

      return reserva;
    }
  }

  export default UpdateReservaService;
