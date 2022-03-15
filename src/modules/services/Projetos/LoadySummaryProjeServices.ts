import { getCustomRepository } from "typeorm";
import ProjetosRepository from '../../../modules/typeorm/repositories/ProjetosRepository';

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

  cod_proj_uuid: string,
  data:string ;
  contrato:number ;
  co:string
  projeto:string ;
  cliente:string ;
  cliente2:string ;
  numero:string ;
  gerente:string ;
  coordenador:string,
  equipe:string ;
  status:string ;
  proposta:string ;
  departamento:string ;
  previsao:string ;
  nproc_origem:string ;
  valor:string ;
  memoalt:string ;
  dt_fim:string ;
  cod_proj:number ;



}





class LoadProjetoSummaryService{
    public async executeDes (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(ProjetosRepository);

        const user = await projetosrRepository.find();

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

              cod_proj_uuid: use.cod_proj_uuid,
              data:use.data,
              contrato:use.contrato,
              co:use.co,
              projeto:use.projeto,
              cliente:use.cliente,
              cliente2:use.cliente2,
              numero:use.numero,
              gerente:use.gerente,
              coordenador:use.coordenador,
              equipe:use.equipe,
              status:use.status,
              proposta:use.proposta,
              departamento:use.departamento,
              previsao:use.previsao,
              nproc_origem:use.nproc_origem,
              valor:use.valor,
              memoalt:use.memoalt,
              dt_fim:use.dt_fim,
              cod_proj:use.cod_proj,



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

export default LoadProjetoSummaryService;
