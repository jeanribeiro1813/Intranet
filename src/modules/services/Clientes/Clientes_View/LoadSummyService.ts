import { getCustomRepository } from "typeorm";
import ClientesRepository from '../../../typeorm/repositories/ClientesRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    uuidcliente: string;
    projeto:string;
    cliente:string;

}





class LoadClientesSummaryService{
    public async summary (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(ClientesRepository);

        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                uuidcliente:use.uuidcliente,
                projeto:use.projeto,
                cliente:use.cliente
                


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
