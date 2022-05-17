import { getCustomRepository } from "typeorm";
import Reserva from '../../../../shared/infra/typeorm/entities/Reserva';
import ReservaRepository from '../../../../shared/infra/typeorm/repositories/ReservaRepository'
import AppError from '../../../../shared/errors/AppErrors';
import {injectable, inject} from 'tsyringe'

interface IResponseDTO {

    cod_reserva_uuid: string;

}


@injectable()
class LoadIndexService {

    constructor(
        @inject('ReservaRepository')
        private reservaRepository: ReservaRepository){
        
      }

    public async index ({cod_reserva_uuid}:IResponseDTO): Promise< Reserva | AppError > {


        const result = await this.reservaRepository.findById(cod_reserva_uuid);

        if(!result){
            throw new AppError("Não Existe esse projeto",409);
            
        }

        return result;
    }
}

export default LoadIndexService;
