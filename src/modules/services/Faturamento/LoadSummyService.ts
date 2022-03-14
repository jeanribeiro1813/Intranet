import { getCustomRepository } from "typeorm";
import FaturamentoRepository from '../../typeorm/repositories/FaturamentoRepository';

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    cod_fat:string;
    cod_user:any;
    departamento:string;
    cod_proj:number;
    contrato:string;
    cod_ativ:number;
    data_:string;
    inicio:string;
    fim:string;

}





class LoadFatSummaryService{
    public async executeDes (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(FaturamentoRepository);

        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                cod_fat:use.cod_fat,
                cod_user:use.cod_user,
                departamento:use.departamento,
                cod_proj:use.cod_proj,
                contrato:use.contrato,
                cod_ativ:use.cod_ativ,
                data_:use.data_,
                inicio:use.inicio,
                fim:use.fim,

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

export default LoadFatSummaryService;
