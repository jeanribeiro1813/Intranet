import AppError from "../../../../shared/errors/AppErrors";
import { getCustomRepository } from "typeorm";
import Chamados from '../../../../shared/infra/typeorm/entities/Chamados';
import ChamadosRepository from '../../../../shared/infra/typeorm/repositories/ChamadosRepository'
import {injectable, inject} from 'tsyringe'



interface IResponseDTO {

    cod_chamado_uuid: string;


}

@injectable()
class LoadIndex {

  constructor(
    @inject('ChamadosRepository')
    private chamadosRepository: ChamadosRepository){
    
  }

    public async index ({cod_chamado_uuid}:IResponseDTO): Promise< Chamados| AppError> {

        const result = await this.chamadosRepository.findById(cod_chamado_uuid)

        
        if(!result){
            throw new AppError ('Codigo de atividade não encontrado',404)
        }

        return result;
    }
}

export default LoadIndex;
