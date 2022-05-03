import { getCustomRepository } from "typeorm";
import Carros from '../../../typeorm/entities/Carros';
import CarrosRepository from '../../../typeorm/repositories/CarrosRepository'
import AppError from "../../../../shared/errors/AppErrors";



interface IResponseDTO {
    carro:string;
    ano: number;
}





class LoadClientesSummaryService{
    public async filter ({carro,ano}:IResponseDTO): Promise<Carros[] | AppError> {
        
        const Repository = getCustomRepository(CarrosRepository);

        const result = await Repository.createQueryBuilder().select()
        .where('carro ILIKE :carro and ano ILIKE :ano', {cod_atv: `%${carro}%`,ano:`%${ano}%`}).getMany();

        if(!result){
            throw new AppError ('Não Existe',405);
          }

        return result ;
    }
}

export default LoadClientesSummaryService;
