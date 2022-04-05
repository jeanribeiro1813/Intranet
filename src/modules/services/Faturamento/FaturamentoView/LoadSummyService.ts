import { getCustomRepository } from "typeorm";
import FaturamentoViewsRepository from '../../../../modules/typeorm/repositories/FaturamentoViewsRepository';
import FaturamentoView from '../../../../modules/typeorm/entities/FaturamentoView'
import AppError from "../../../../shared/errors/AppErrors";


interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    codfat:string;
    nome_usuario:string;
    departamento:string;
    projeto:string;
    cliente:string;
    atividade:string;
    data:string;
    inicio:string;
    fim:string;
    status:string;
    obs:string;

}





class LoadFatSummaryService{
    public async executeDes (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(FaturamentoViewsRepository);

        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                codfat:use.codfat,
                nome_usuario:use.nome_usuario,
                departamento:use.departamento,
                projeto:use.projeto,
                cliente:use.cliente,
                atividade:use.atividade,
                data:use.data,
                inicio:use.inicio,
                fim:use.fim,
                status:use.status,
                obs:use.obs,



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
