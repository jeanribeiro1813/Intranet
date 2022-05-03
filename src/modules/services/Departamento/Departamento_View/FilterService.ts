import { getCustomRepository } from "typeorm";
import Departamento from '../../../typeorm/entities/Departamento'
import DepartamentoRepository from '../../../typeorm/repositories/DepartamentoRepository'
import AppError from "../../../../shared/errors/AppErrors";



interface IResponseDTO {

    departamento:string;
}





class FilterService{
    public async filter ({departamento}:IResponseDTO): Promise<Departamento[] | AppError> {
        
        const Repository = getCustomRepository(DepartamentoRepository);

        const result = await Repository.createQueryBuilder().select()
        .where('departamento ILIKE :departamento ', {departamento: `%${departamento}%`}).getMany();

        if(!result){
            throw new AppError ('Não Existe',405);
          }

        return result ;
    }
}

export default FilterService;
