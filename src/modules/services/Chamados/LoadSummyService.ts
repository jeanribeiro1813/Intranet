import { getCustomRepository } from "typeorm";
import Chamados from '../../typeorm/entities/Chamados';
import ChamadosRepository from '../../typeorm/repositories/ChamadosRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

  cod_chamado_uuid: string;
  cod_usuario:number;
  equipamento:string;
  descricao:string;
  prioridade:string;
  dt_solicitacao: string;
  dt_conclusao:string;
  desc_conclusao:string;
  cod_chamado: number;

}





class LoadChamadosSummaryService{
    public async executeDes (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(ChamadosRepository);

        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                cod_chamado_uuid:use.cod_chamado_uuid,
                cod_usuario:use.cod_usuario,
                equipamento:use.equipamento,
                descricao:use.descricao,
                prioridade:use.prioridade,
                dt_solicitacao:use.dt_solicitacao,
                dt_conclusao:use.dt_conclusao,
                desc_conclusao:use.desc_conclusao,
                cod_chamado:use.cod_chamado,
                


            }
            return DescItemOfSummary;
            }

        )

        const responseDTO = {
            summary,
        };

        return responseDTO;
    }
}

export default LoadChamadosSummaryService;
