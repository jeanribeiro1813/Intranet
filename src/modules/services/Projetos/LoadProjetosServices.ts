import AppError from "@shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Projetos from '../../../modules/typeorm/entities/Projetos';
import ProjetosRepository from '../../../modules/typeorm/repositories/ProjetosRepository'


interface IRequestDTO {

    status:string;
  }

class LoadProjetosService {

    public async load({status}:IRequestDTO): Promise<Projetos[] | AppError>{

        const loadService = getCustomRepository(ProjetosRepository);

        const cargoRepo = await loadService.createQueryBuilder().select()
        .where('status ILIKE :status  ', {status:`%${status}%`}).getMany()


        if(!cargoRepo){
            throw new AppError ('Não Existe',405);
          }

        return cargoRepo;
    }
}

export default LoadProjetosService;
