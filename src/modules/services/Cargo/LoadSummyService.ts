import { getCustomRepository } from "typeorm";
import Cargo from '../../typeorm/entities/Cargo';
import CargoRepository from '../../typeorm/repositories/CargoRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    uuidcargo: string;
    desc_cargo:string;
    cod_cargo:number;

}





class LoadCargoSummaryService{
    public async executeDes (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(CargoRepository);

        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                uuidcargo:use.uuidcargo,
                desc_cargo:use.desc_cargo,
                cod_cargo:use.cod_cargo
                


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

export default LoadCargoSummaryService;
