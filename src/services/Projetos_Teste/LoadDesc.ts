import { getCustomRepository, IsNull, Not } from 'typeorm'
import ProjetosRepository from '../../typeorm/repositories/ProjetosRepository'

interface IResponseDTO {
    summary: IDescItemOfSummary[];
}

interface IDescItemOfSummary {

    testeId:any,
    testeOne:string;
    testeTwo:string;
    testeFour:string;
    testeFive:string;
    testeSix:string;
  
}



class LoadProjetosSummaryService{
    public async executeDes (): Promise<IResponseDTO> {       
        const projetosrRepository = getCustomRepository(ProjetosRepository);

        const user = await projetosrRepository.find({
            testeId: Not(IsNull()),
        });

        const summary = user.map((use) =>{
            const DescItemOfSummary = {

                testeId: use.testeId,
                testeOne:  use.testeOne,
                testeTwo: use.testeTwo,
                testeFour: use.testeFour,
                testeFive:  use.testeFive,
                testeSix: use.testeSix,
                
                
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

export default LoadProjetosSummaryService;