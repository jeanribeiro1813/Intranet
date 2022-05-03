import { getCustomRepository,getRepository } from 'typeorm'
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

  class UpdateReservaService {

    public async update({cod_reserva_uuid,placa,usuario,dt_saida,
      dt_chegada,hora_saida,hora_chegada,km_saida,
      km_chegada,projeto,cancelado,desc_cancel,dev_obs,cod_reserva}: IRequestDTO): Promise<Reserva | Error> {

      const Repository = getCustomRepository(ReservaRepository);

      const result = await Repository.findOne(cod_reserva_uuid);

      if (!result) {
        throw new AppError ('reserva não existe',404);
      }


      result.placa = placa ? placa : result.placa;
      result.usuario = usuario ? usuario : result.usuario;
      result.dt_saida = dt_saida ? dt_saida : result.dt_saida;
      result.dt_chegada = dt_chegada ? dt_chegada : result.dt_chegada;
      result.hora_saida = hora_saida ? hora_saida : result.hora_saida;
      result.hora_chegada = hora_chegada ? hora_chegada : result.hora_chegada;
      result.km_saida = km_saida ? km_saida : result.km_saida;
      result.km_chegada = km_chegada ? km_chegada : result.km_chegada;
      result.projeto = projeto ? projeto : result.projeto;
      result.cancelado = cancelado ? cancelado : result.cancelado;
      result.desc_cancel = desc_cancel ? desc_cancel : result.desc_cancel;
      result.dev_obs = dev_obs ? dev_obs : result.dev_obs;
      result.cod_reserva = cod_reserva ? cod_reserva : result.cod_reserva;
     
  

      await Repository.save(result);

      return result;
    }
  }

  export default UpdateReservaService;
