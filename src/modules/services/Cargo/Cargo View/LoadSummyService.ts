import { getCustomRepository } from "typeorm";
import Cargo from '../../../../shared/infra/typeorm/entities/Cargo';
import CargoRepository from '../../../../shared/infra/typeorm/repositories/CargoRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    uuidcargo: string;
    cargo:string;
    cod_cargo:number;

}





class LoadCargoSummaryService{
    public async summary (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(CargoRepository);

        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                uuidcargo:use.uuidcargo,
                cargo:use.cargo,
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
