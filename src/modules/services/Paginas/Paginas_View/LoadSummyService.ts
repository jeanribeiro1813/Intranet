import { getCustomRepository } from "typeorm";
import Paginas from '../../../typeorm/entities/Paginas';
import PaginaRepository from '../../../typeorm/repositories/PaginaRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    cod_page_uuid: string;
    pagina:string;
    descricao: string;
    banner: number;
    cod_page: number;
  

}





class LoadPaginasSummaryService{
    public async executeDes (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(PaginaRepository);

        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                cod_page_uuid:use.cod_page_uuid,
                pagina:use.pagina,
                descricao:use.descricao,
                banner:use.banner,
                cod_page:use.cod_page,

                


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

export default LoadPaginasSummaryService;
