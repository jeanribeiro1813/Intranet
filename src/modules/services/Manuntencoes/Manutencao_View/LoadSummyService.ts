import { getCustomRepository } from "typeorm";
import Manutencoes from '../../../typeorm/entities/Manutencoes';
import ManuntencoesRepository from '../../../typeorm/repositories/ManuntencoesRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    cod_manutencao_uuid: string;
    descricao:string;
    valor: string;
    cod_manutencao: number;

}





class LoadManuntencaoSummaryService{
    public async executeDes (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(ManuntencoesRepository);

        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                cod_manutencao_uuid:use.cod_manutencao_uuid,
                descricao:use.descricao,
                valor:use.valor,
                cod_manutencao:use.cod_manutencao,
                


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

export default LoadManuntencaoSummaryService;
