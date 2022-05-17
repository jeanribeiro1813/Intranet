import { getCustomRepository, getRepository } from "typeorm";
import Clientes from '../../../../shared/infra/typeorm/entities/Clientes';
import ClientesRepository from '../../../../shared/infra/typeorm/repositories/ClientesRepository'
import AppError from "../../../../shared/errors/AppErrors";



interface IResponseDTO {


    projeto:string;
    cliente:string;
}





class FilterService{
    public async filter ({projeto,cliente}:IResponseDTO): Promise<Clientes[] | AppError> {
        
        const Repository = getRepository(Clientes);

        const result = await Repository.createQueryBuilder().select()
        .where('projeto ILIKE :projeto and cliente ILIKE :cliente', {projeto: `%${projeto}%`,cliente:`%${cliente}%`}).getMany();

        if(!result){
            throw new AppError ('Não Existe',405);
          }

        return result ;
    }
}

export default FilterService;
