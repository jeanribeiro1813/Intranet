import { getCustomRepository } from "typeorm";
import FuncionarioRepository from '../../../typeorm/repositories/FuncionarioRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    cod_func_uuid: string;
    cod_cargo:number;
    cod_usuario: number;
    cod_func: number;
  
  
  

}





class LoadClientesSummaryService{
    public async executeDes (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(FuncionarioRepository);

        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                cod_func_uuid:use.cod_func_uuid,
                cod_cargo:use.cod_cargo,
                cod_usuario:use.cod_usuario,
                cod_func:use.cod_func,
                


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
