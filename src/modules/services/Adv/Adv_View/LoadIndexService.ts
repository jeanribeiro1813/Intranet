import { getCustomRepository } from "typeorm";
import AdvRepository from '../../../../shared/infra/typeorm/repositories/AdvRepository'
import Adv from '../../../../shared/infra/typeorm/entities/Adv'
import AppError from "../../../../shared/errors/AppErrors";
import {injectable, inject} from 'tsyringe'


interface IResponseDTO {

    codadv: string;
  

}

@injectable()
class LoadIndexService {

  constructor(
    @inject('AdvRepository')
    private advRepository: AdvRepository){
}

    public async index ({codadv}:IResponseDTO): Promise<Adv | AppError> {


        const result =  await this.advRepository.findById(codadv);

        if(!result){
            throw new AppError('Codigo não encontrado',409)
        }

        return result;
    }
}

export default LoadIndexService;
