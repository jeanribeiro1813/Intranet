import { getCustomRepository } from "typeorm";
import AdvRepository from '../../typeorm/repositories/AdvRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    codadv: string;
    cod_page:number;
    desc_adv: string;
    cod_adv: string;
  

}





class LoadClientesSummaryService{
    public async executeDes (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(AdvRepository);

        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                codadv:use.codadv,
                cod_page:use.cod_page,
                desc_adv:use.desc_adv,
                cod_adv:use.cod_adv,
                


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
