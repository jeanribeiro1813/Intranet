import { getCustomRepository } from "typeorm";
import Fornecedores from '../../typeorm/entities/Fornecedores';
import FornecedoresRepository from '../../typeorm/repositories/FornecedoresRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

uuidfornece: string;
  nome:string;
  tp_doc:string;
  doc: string;
  email:string;
  contato:string;
  contato2: string;
  cargo:string;
  status:string;
  avatar: string;
  

}





class LoadFornecedoresSummaryService{
    public async executeDes (): Promise<IResponseDTO> {
        const projetosrRepository = getCustomRepository(FornecedoresRepository);

        const user = await projetosrRepository.find({order:{
            uuidfornece:'ASC'
        }});

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                uuidfornece:use.uuidfornece,
                nome:use.nome,
                tp_doc: use.tp_doc,
                doc:use.doc,
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
