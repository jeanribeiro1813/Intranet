import { getCustomRepository } from "typeorm";
import DiasRepository from '../../../../shared/infra/typeorm/repositories/DiasRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    uuiddiasuteis: string;
    ano:string;
    mes: string;
    codigo: string;
    dias: string;
  

}





class LoadPagamentoSummaryService{
    public async executeDes (): Promise<IResponseDTO> {
        const Repository = getCustomRepository(DiasRepository);

        const user = await Repository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {
                

            uuiddiasuteis:use.uuiddiasuteis,
            ano:use.ano,
            mes:use.mes,
            codigo:use.codigo,
            dias:use.dias,
                


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

export default LoadPagamentoSummaryService;
