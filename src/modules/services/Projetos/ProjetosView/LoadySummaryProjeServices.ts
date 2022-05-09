import { getCustomRepository } from "typeorm";
import ProjetosViewRepository from '../../../../shared/infra/typeorm/repositories/ProjetosViewRepository';

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

  uuidprojeto: string,
  nprojeto:string ;
  projeto:string ;
  data:string
  uuiddeparta:string ;
  departamento:string ;
  contrato:string;
  uuidcliente:string ;
  cliente:string ;
  numero:string,
  gerente:string ;
  equipe:string ;
  status:string ;
  proposta:string ;
  previsao:string ;
  nproc_origem:string ;
  valor:string ;
  memoalt:string ;
  dt_fim:string;



}





class LoadProjetoSummaryService{
    public async executeDes (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(ProjetosViewRepository);

        const user = await projetosrRepository.find();

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                uuidprojeto: use.uuidprojeto,
                nprojeto:use.nprojeto,
                projeto:use.projeto,
                data:use.data,
                uuiddeparta:use.uuiddeparta,
                departamento:use.departamento,
                contrato:use.contrato,
                uuidcliente:use.uuidcliente,
                cliente:use.cliente,
                numero:use.numero,
                gerente:use.gerente,
                equipe:use.equipe,
                status:use.status,
                proposta:use.proposta,
                previsao:use.previsao,
                nproc_origem:use.nproc_origem,
                valor:use.valor,
                memoalt:use.memoalt,
                dt_fim:use.dt_fim
           


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
