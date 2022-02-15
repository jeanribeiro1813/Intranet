import { Request, Response } from 'express';
import LoadProjetosByIdService from '../services/Projetos_Teste/LoadByIdServive';
import LoadProjetosDescPontos from '../services/Projetos_Teste/LoadDesc';
// import UpProjetosServices from '../services/Projetos_Teste/UpProjetosServices';
import Projetos from '../typeorm/entities/Projetos';
// import CreateServices from '../services/Projetos_Teste/CreateTesteServices';
import { getRepository } from "typeorm";




export default class ProjetosController {

  public async loadById(request: Request, response: Response): Promise<Response> {

    const {testeId} = request.body;

    const loadProjetosById = new LoadProjetosByIdService();

    const funcao = await loadProjetosById.execute({testeId});

    return response.json(funcao);
  }

//   public async upById (request: Request , response: Response){

//     const {testeId} = request.params;

//     //Organizado em Ordem para fazer o update

//     const{testeOne,testeTwo,testeFour,testeFive,testeSix} = request.body;

//     const UpdateService = new UpProjetosServices;

//     const funcao = await UpdateService.saved(
//       {
//         testeOne,
//         testeTwo,
//         testeFour,
//         testeFive,
//         testeSix,
//     }
//       );

//     return response.json(funcao);


//   }

  public async execute(request: Request, response: Response): Promise<Response> {
    const loadFuncao = new LoadProjetosDescPontos();

    const funcao = await loadFuncao.executeDes();

    return response.json(funcao);

  }

      //Criação Projetos
    //   public async create(request: Request, response: Response){

    //     const {name, email,password} = request.body;
        
    //     const createCargo = new CreateServices();
  
    //     const user = await createCargo.execute(
    //       { 
    //         testeOne,
    //         testeTwo,
    //         testeFour,
    //         testeFive,
    //         testeSix
    //       }
    //     );
        
    //     return response.json(user);
    //   }


      //Detelete Usuario
      public async delete(request: Request, response: Response){

        const repositories = getRepository(Projetos);
      
        const {testeOne} = request.params;
   
        const projectExist = await repositories.findOne({where:{testeOne}});
   
        if(projectExist){
          return response.status(404).json('Não Existe esse Projeto');
        }
  
        await repositories.delete(testeOne);
   
        return response.json("Delete feito");
  
  }

}



