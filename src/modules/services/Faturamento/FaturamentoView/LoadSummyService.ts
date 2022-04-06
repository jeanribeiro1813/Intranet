import { getCustomRepository } from "typeorm";
import FaturamentoViewsRepository from '../../../../modules/typeorm/repositories/FaturamentoViewsRepository';
import FaturamentoView from '../../../../modules/typeorm/entities/FaturamentoView'
import AppError from "../../../../shared/errors/AppErrors";


interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    uuidfat: string,
    cliente: string,
    empresa: string,
    departamento: string,
    nprojeto: string,
    uuidprojeto: string,
    projeto: string,
    atividade: string,
    data: string,
    inicio:string,
    fim: string,
    obs: string,
    status:string,

}





class LoadFatSummaryService{
    public async executeDes (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(FaturamentoViewsRepository);

        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                uuidfat: use?.uuidfat,
                cliente: use?.cliente,
                empresa: use?.empresa,
                departamento: use?.departamento,
                nprojeto: use?.nprojeto,
                uuidprojeto: use?.uuidprojeto,
                projeto: use?.projeto,
                atividade: use?.atividade,
                data: use?.data,
                inicio: use?.inicio,
                fim: use?.fim,
                obs: use?.obs,
                status:use?.status



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
