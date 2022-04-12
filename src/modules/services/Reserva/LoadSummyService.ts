import { getCustomRepository } from "typeorm";
import Reserva from '../../typeorm/entities/Reserva';
import ReservaRepository from '../../typeorm/repositories/ReservaRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    cod_reserva_uuid: string;
    placa:string;
    usuario: string;
    dt_saida: string;
    dt_chegada: string;
    hora_saida:string;
    hora_chegada: string;
    km_saida: number;
    km_chegada: string;
    projeto: string;
    cancelado:number;
    desc_cancel: string;
    dt_cancel: string;
    dev_obs: string;
    cod_reserva: number;
  

}





class LoadClientesSummaryService{
    public async executeDes (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(ReservaRepository);

        const user = await projetosrRepository.find({});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                cod_reserva_uuid:use.cod_reserva_uuid,
                placa:use.placa,
                usuario:use.usuario,
                dt_saida:use.dt_saida,
                dt_chegada:use.dt_chegada,
                hora_saida:use.hora_saida,
                hora_chegada:use.hora_chegada,
                km_saida: use.km_saida,
                km_chegada: use.km_chegada,
                projeto:use.projeto,
                cancelado:use.cancelado,
                desc_cancel:use.desc_cancel,
                dt_cancel:use.dt_cancel,
                dev_obs:use.dev_obs,
                cod_reserva:use.cod_reserva
                


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
