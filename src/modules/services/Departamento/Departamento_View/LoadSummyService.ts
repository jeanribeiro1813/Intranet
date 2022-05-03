import { getCustomRepository } from "typeorm";
import Departamento from '../../../typeorm/entities/Departamento';
import DepartamentoRepository from '../../../typeorm/repositories/DepartamentoRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    uuiddeparta: string;
    departamento:string;
  

}





class LoadClientesSummaryService{
    public async summary (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(DepartamentoRepository);

        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                uuiddeparta:use.uuiddeparta,
                departamento:use.departamento,
                


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
