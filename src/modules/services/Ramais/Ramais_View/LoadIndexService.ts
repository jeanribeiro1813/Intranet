import { getCustomRepository } from "typeorm";
import Ramais from '../../../../shared/infra/typeorm/entities/Ramais';
import RamaisRepository from '../../../../shared/infra/typeorm/repositories/RamaisRepository'
import AppError from '../../../../shared/errors/AppErrors';


interface IResponseDTO {

    cuuidramal: string;
 


}





class LoadIndexService{
    public async index ({cuuidramal}:IResponseDTO): Promise< Ramais | AppError > {

        const Repository = getCustomRepository(RamaisRepository);

        const result = await Repository.findById(cuuidramal);

        if(!result){
            throw new AppError("Não Existe esse projeto",409);
            
        }

        return result;
    }
}

export default LoadIndexService;
