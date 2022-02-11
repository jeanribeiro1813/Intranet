// import { getCustomRepository } from 'typeorm'

// import Manutencao from '../../typeorm/entities/Manutencao'
// import PilotesRepository from '../../typeorm/repositories/PilotesRepository'

// interface IRequestDTO {
//     id: any;
// }

// class LoadPiloteByIdService{
//     public async execute ({id}:IRequestDTO): Promise<Manutencao | undefined> {
        
//         const pilotesRepository = getCustomRepository(PilotesRepository);

//         const pilote = await pilotesRepository.findOne({
//             id
//         });

//         const responseDTO = pilote;

//         return responseDTO;
//     }
// }

// export default LoadPiloteByIdService;