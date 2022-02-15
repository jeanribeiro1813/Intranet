import { getCustomRepository } from 'typeorm'
import ProjetosRepository from '../../typeorm/repositories/ProjetosRepository'
import Projetos from '../../typeorm/entities/Projetos'
import AppError from '../../Error/AppError';




interface IRequestDTO {
    
    testeId:string,
    testeOne:string;
    testeTwo:string;
    testeFour:string;
    testeFive:string;
    testeSix:string;
  


}

//Organizado em Ordem para fazer o update
class UpProjetosByIdService{
    public async saved ({testeId,testeOne,testeTwo,testeFour,testeFive,testeSix}:IRequestDTO): Promise<Projetos | undefined>{
        

        const Projetosrepository = getCustomRepository(ProjetosRepository);

        const pilow = await Projetosrepository.findOne(testeId);

        if(!pilow){
            
            throw new AppError('Não existe '); 
        }

        pilow.testeOne = testeOne ? testeOne : pilow.testeOne;
        pilow.testeTwo = testeTwo ? testeTwo : pilow.testeTwo;
        pilow.testeFour = testeFour ? testeFour : pilow.testeFour;
        pilow.testeFive = testeFive ? testeFive : pilow.testeFive;
        pilow.testeSix = testeSix ? testeSix : pilow.testeSix;
        

        
        await Projetosrepository.save(pilow);

        return pilow;
        
     
    }

}


export default UpProjetosByIdService;

