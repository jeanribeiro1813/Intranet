import { getCustomRepository } from "typeorm";
import Fornecedores from '../../../../shared/infra/typeorm/entities/Fornecedores';
import FornecedoresRepository from '../../../../shared/infra/typeorm/repositories/FornecedoresRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

  uuidusuario: string;
  usuario:string;
  tp_doc:string;
  cpf_cnpj: string;
  email:string;
  contato:string;
  contato2: string;
  cargo:string;
  status:string;
  avatar: string;
  

}





class LoadFornecedoresSummaryService{
    public async summary (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(FornecedoresRepository);

        const user = await projetosrRepository.find({order:{
            uuidusuario:'ASC'
        }});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                uuidusuario:use.uuidusuario,
                usuario:use.usuario,
                tp_doc: use.tp_doc,
                cpf_cnpj:use.cpf_cnpj,
                email:use.email,
                contato: use.contato,
                contato2:use.contato2,
                cargo:use.cargo,
                status: use.status,
                avatar: use.avatar,
                


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

export default LoadFornecedoresSummaryService;
