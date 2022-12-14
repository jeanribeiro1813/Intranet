import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Reserva from '../../../../shared/infra/typeorm/entities/Reserva';
import ReservaRepository from '../../../../shared/infra/typeorm/repositories/ReservaRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'




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

  @injectable()
class CreateReservaService {

    constructor(
        @inject('ReservaRepository')
        private reservaRepository: ReservaRepository){
        
      }

    public async create({ cod_reserva_uuid,placa,usuario,dt_saida,dt_cancel,
      dt_chegada,hora_saida,hora_chegada,km_saida,
      km_chegada,projeto,cancelado,desc_cancel,dev_obs,cod_reserva}: IRequestDTO): Promise<Reserva | Error> {

      const redisCache = new RedisCache();

      const result = await this.reservaRepository.findById(cod_reserva_uuid);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  this.reservaRepository.create({

        cod_reserva_uuid,placa,usuario,dt_saida,dt_cancel,
        dt_chegada,hora_saida,hora_chegada,km_saida,
        km_chegada,projeto,cancelado,desc_cancel,dev_obs,cod_reserva

      });

      await redisCache.invalidation('API_REDIS_RESERVA');

      return cliet;
    }
  }

  export default CreateReservaService;
