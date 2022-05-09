import { getCustomRepository } from "typeorm";
import FornecedoresRepository from '../../../../shared/infra/typeorm/repositories/FornecedoresRepository'
import Fornecedores from '../../../../shared/infra/typeorm/entities/Fornecedores'
import AppError from "../../../../shared/errors/AppErrors";



interface IResponseDTO {

    cargo:string;
   status:string;
}





class FilterService{
    public async filter ({cargo,status}:IResponseDTO): Promise<Fornecedores[] | AppError> {
        
        const Repository = getCustomRepository(FornecedoresRepository);

        const result = await Repository.createQueryBuilder().select()
        .where('cargo ILIKE :cargo OR status ILIKE :status ', {cargo: `%${cargo}%`,status: `%${status}%`}).getMany();

        if(!result){
            throw new AppError ('Não Existe',405);
          }

        return result ;
    }
}

export default FilterService;
