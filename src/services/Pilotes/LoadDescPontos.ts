import { getCustomRepository, IsNull, Not } from 'typeorm'
import CargoRepository from '../../typeorm/repositories/CargoRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {
    // cod_cargo: any;
    // desc_cargo:string;

    id:any,
    name:string,
    email:string,
    password:string
  
}



class LoadCargoSummaryService{
    public async executeDes (): Promise<IResponseDTO> {       
        const piloterRepository = getCustomRepository(CargoRepository);

        const user = await piloterRepository.find({
            id: Not(IsNull()),
        });

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                id: use.id,
                name:  use.name,
                email: use.email,
                password:  use.password,
                
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