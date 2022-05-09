import { getCustomRepository } from "typeorm";
import Atividades from '../../../../shared/infra/typeorm/entities/Atividades';
import AtividadeRepository from '../../../../shared/infra/typeorm/repositories/AtividadeRepository'
import AppError from "../../../../shared/errors/AppErrors";



interface IResponseDTO {
    atividade:string;
    cod_atv:string;
}





class LoadClientesSummaryService{
    public async filter ({atividade,cod_atv}:IResponseDTO): Promise<Atividades[] | AppError> {
        
        const Repository = getCustomRepository(AtividadeRepository);

        const result = await Repository.createQueryBuilder().select()
        .where('cod_atv ILIKE :cod_atv and atividade ILIKE :atividade', {cod_atv: `%${cod_atv}%`,atividade:`%${atividade}%`}).getMany();

        if(!result){
            throw new AppError ('Não Existe',405);
          }

        return result ;
    }
}

export default LoadClientesSummaryService;
