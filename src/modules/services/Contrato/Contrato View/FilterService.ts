import { getCustomRepository } from "typeorm";
import Contrato from '../../../../shared/infra/typeorm/entities/Contrato';
import ContratoRepository from '../../../../shared/infra/typeorm/repositories/ContratoRepository'
import AppError from "../../../../shared/errors/AppErrors";



interface IResponseDTO {

    contrato:string;
}





class FilterService{
    public async filter ({contrato}:IResponseDTO): Promise<Contrato[] | AppError> {
        
        const Repository = getCustomRepository(ContratoRepository);

        const result = await Repository.createQueryBuilder().select()
        .where('contrato ILIKE :contrato ', {contrato: `%${contrato}%`}).getMany();

        if(!result){
            throw new AppError ('Não Existe',405);
          }

        return result ;
    }
}

export default FilterService;
