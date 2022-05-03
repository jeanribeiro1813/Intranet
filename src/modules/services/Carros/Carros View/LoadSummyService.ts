import { getCustomRepository } from "typeorm";
import Carros from '../../../typeorm/entities/Carros';
import CarrosRepository from '../../../typeorm/repositories/CarrosRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    id_uuid: string;
    placa:string;
    carro:string;
    ano: number;
    cor:string;
    km:string;
    ativo: number;
    garagem:string;
    id:number;
  
  

}





class LoadCarrosSummaryService{
    public async summary (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(CarrosRepository);

        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                id_uuid:use.id_uuid,
                placa:use.placa,
                carro:use.carro,
                ano:use.ano,
                cor:use.cor,
                km:use.km,
                ativo:use.ativo,
                garagem:use.garagem,
                id:use.id
                


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

export default LoadCarrosSummaryService;
