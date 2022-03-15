import { getCustomRepository } from "typeorm";
import FaturamentoRepository from '../../../modules/typeorm/repositories/FaturamentoRepository';

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    cod_fat:string;
    usuario:any;
    departamento:string;
    cod_proj:number;
    contrato:string;
    atividade:string;
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
                usuario:use.usuario,
                departamento:use.departamento,
                cod_proj:use.cod_proj,
                contrato:use.contrato,
                atividade:use.atividade,
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
