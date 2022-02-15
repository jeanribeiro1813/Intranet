// import { getCustomRepository } from 'typeorm'
// import Projetos from '../../typeorm/entities/Projetos';
// import ProjetosRepository from '../../typeorm/repositories/ProjetosRepository'
// import AppError from '../../Error/AppError';

// interface IRequestDTO {
//     testeOne:string;
//     testeTwo:string;
//     testeTree:string;
//     testeFour:string;
//     testeFive:string;
//     testeSix:string;

//   }
  
//   class CreateProjetosService {
  
//     public async execute({testeOne, testeTwo,testeTree,testeFour,testeFive,testeSix}: IRequestDTO): Promise<Projetos> {
      
//       const projetosRepository = getCustomRepository(ProjetosRepository);
        
//       const checkUserExists = await projetosRepository.findOne(testeOne);
  
//       if (checkUserExists) {
//         throw new AppError('Nome already used.');
//       }
  
//       const project = await projetosRepository.create({
//         testeOne,
//         testeTwo,
//         testeTree,
//         testeFour,
//         testeFive,
//         testeSix,
//       });
  
//       return project;
//     }
//   }
  
//   export default CreateProjetosService;
  