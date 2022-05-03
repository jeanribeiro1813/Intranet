import { getCustomRepository } from "typeorm";
import Ramais from '../../../typeorm/entities/Ramais';
import RamaisRepository from '../../../typeorm/repositories/RamaisRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    uuidramal: string;
    ramal:number;
    cod_atv:string;

  

}





class LoadRamaisSummary{
    public async executeDes (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(RamaisRepository);

        const user = await projetosrRepository.find({order:{
            cod_atv:'ASC'
        }});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                uuidramal: use.uuidramal,
                ramal:use.ramal,
                cod_atv:use.cod_atv,
                


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

export default LoadRamaisSummary;
