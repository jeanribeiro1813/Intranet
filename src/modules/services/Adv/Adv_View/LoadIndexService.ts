import { getCustomRepository } from "typeorm";
import AdvRepository from '../../../typeorm/repositories/AdvRepository'
import Adv from '../../../typeorm/entities/Adv'
import AppError from "../../../../shared/errors/AppErrors";



interface IResponseDTO {

    codadv: string;
  

}





class LoadIndexService{
    public async index ({codadv}:IResponseDTO): Promise<Adv | AppError> {
        const Repository = getCustomRepository(AdvRepository);

        const result = await Repository.findById(codadv);

        if(!result){
            throw new AppError('Codigo não encontrado',409)
        }

        return result;
    }
}

export default LoadIndexService;
