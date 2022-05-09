import AppError from "../../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Chamados from '../../../../shared/infra/typeorm/entities/Chamados';
import ChamadosRepository from '../../../../shared/infra/typeorm/repositories/ChamadosRepository'



interface IResponseDTO {

    cod_chamado_uuid: string;


}





class LoadIndex{
    public async index ({cod_chamado_uuid}:IResponseDTO): Promise< Chamados| AppError> {

        const Repository = getCustomRepository(ChamadosRepository);

        const result = await Repository.findByCod(cod_chamado_uuid)

        
        if(!result){
            throw new AppError ('Codigo de atividade não encontrado',404)
        }

        return result;
    }
}

export default LoadIndex;
