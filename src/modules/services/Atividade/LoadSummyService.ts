import { getCustomRepository } from "typeorm";
import Atividades from '../../typeorm/entities/Atividades';
import AtividadeRepository from '../../typeorm/repositories/AtividadeRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    codativida: string;
    atividade:string;
  

}





class LoadClientesSummaryService{
    public async executeDes (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(AtividadeRepository);

        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                codativida:use.codativida,
                atividade:use.atividade,
                


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
