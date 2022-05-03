import { getCustomRepository } from "typeorm";
import Clientes from '../../../typeorm/entities/Clientes';
import ClientesRepository from '../../../typeorm/repositories/ClientesRepository'
import AppError from "../../../../shared/errors/AppErrors";



interface IResponseDTO {


    projeto:string;
    cliente:string;
}





class FilterService{
    public async filter ({projeto,cliente}:IResponseDTO): Promise<Clientes[] | AppError> {
        
        const Repository = getCustomRepository(ClientesRepository);

        const result = await Repository.createQueryBuilder().select()
        .where('projeto ILIKE :projeto and cliente ILIKE :cliente', {projeto: `%${projeto}%`,cliente:`%${cliente}%`}).getMany();

        if(!result){
            throw new AppError ('Não Existe',405);
          }

        return result ;
    }
}

export default FilterService;
