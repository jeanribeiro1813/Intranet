import { getCustomRepository } from "typeorm";
import Atividades from '../../../typeorm/entities/Atividades';
import AtividadeRepository from '../../../typeorm/repositories/AtividadeRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    uuidatividade: string;
    atividade:string;
    cod_atv:string;

  

}





class LoadClientesSummaryService{
    public async summary (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(AtividadeRepository);

        const user = await projetosrRepository.find({order:{
            cod_atv:'ASC'
        }});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                uuidatividade:use.uuidatividade,
                atividade:use.atividade,
                cod_atv: use.cod_atv,
                


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

export default LoadClientesSummaryService;
