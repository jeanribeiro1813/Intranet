import { getCustomRepository } from "typeorm";
import Cargo from '../../../../shared/infra/typeorm/entities/Cargo';
import CargoRepository from '../../../../shared/infra/typeorm/repositories/CargoRepository'
import AppError from "../../../../shared/errors/AppErrors";



interface IResponseDTO {
    cargo:string;
    cod_cargo:number;
}





class LoadClientesSummaryService{
    public async filter ({cargo,cod_cargo}:IResponseDTO): Promise<Cargo[] | AppError> {
        
        const Repository = getCustomRepository(CargoRepository);

        const result = await Repository.createQueryBuilder().select()
        .where('cod_cargo ILIKE :cod_cargo and cargo ILIKE :cargo', {cod_cargo: `%${cod_cargo}%`,cargo:`%${cargo}%`}).getMany();

        if(!result){
            throw new AppError ('Não Existe',405);
          }

        return result ;
    }
}

export default LoadClientesSummaryService;
