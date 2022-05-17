import { getCustomRepository, getRepository } from "typeorm";
import Chamados from '../../../../shared/infra/typeorm/entities/Chamados';
import ChamadosRepository from '../../../../shared/infra/typeorm/repositories/ChamadosRepository'
import AppError from "../../../../shared/errors/AppErrors";



interface IResponseDTO {

    cod_chamado_uuid: string;
    cod_usuario:number;
}





class FilterService{
    public async filter ({cod_chamado_uuid,cod_usuario}:IResponseDTO): Promise<Chamados[] | AppError> {
        
        const Repository = getRepository(Chamados);

        const result = await Repository.createQueryBuilder().select()
        .where('cod_chamado_uuid ILIKE :cod_chamado_uuid and cod_usuario ILIKE :cod_usuario', {cod_chamado_uuid: `%${cod_chamado_uuid}%`,cod_usuario:`%${cod_usuario}%`}).getMany();

        if(!result){
            throw new AppError ('Não Existe',405);
          }

        return result ;
    }
}

export default FilterService;
