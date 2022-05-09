import { getCustomRepository } from "typeorm";
import Reserva from '../../../../shared/infra/typeorm/entities/Reserva';
import ReservaRepository from '../../../../shared/infra/typeorm/repositories/ReservaRepository'
import AppError from '../../../../shared/errors/AppErrors';


interface IResponseDTO {

    cod_reserva_uuid: string;

}





class LoadIndexService{
    public async index ({cod_reserva_uuid}:IResponseDTO): Promise< Reserva | AppError > {

        const Repository = getCustomRepository(ReservaRepository);

        const result = await Repository.findById(cod_reserva_uuid);

        if(!result){
            throw new AppError("Não Existe esse projeto",409);
            
        }

        return result;
    }
}

export default LoadIndexService;
