import { getCustomRepository } from "typeorm";
import ContratoRepository from '../../../../shared/infra/typeorm/repositories/ContratoRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    uuidcontrato: string;
    contrato:string;
  

}





class LoadClientesSummaryService{
    public async summary (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(ContratoRepository);

        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                uuidcontrato:use.uuidcontrato,
                contrato:use.contrato,
    
                


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
