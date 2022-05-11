import { getCustomRepository } from "typeorm";
import Manutencoes from '../../../../shared/infra/typeorm/entities/Manutencoes';
import ManuntencoesRepository from '../../../../shared/infra/typeorm/repositories/ManuntencoesRepository'
import AppError from "../../../../shared/errors/AppErrors";



interface IResponseDTO {

    cod_cargo:number;
    cod_func: number;
}





class FilterService{
    public async filter ({cod_cargo,cod_func}:IResponseDTO): Promise<Manutencoes[] | AppError> {
        
        const Repository = getCustomRepository(ManuntencoesRepository);

        const result = await Repository.createQueryBuilder().select()
        .where('cod_cargo ILIKE :cod_cargo OR cod_func ILIKE :cod_func ', {cod_cargo: `%${cod_cargo}%`,cod_func: `%${cod_func}%`}).getMany();

        if(!result){
            throw new AppError ('Não Existe',405);
          }

        return result ;
    }
}

export default FilterService;
