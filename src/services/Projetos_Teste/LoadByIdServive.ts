import { getCustomRepository } from 'typeorm'

import Projetos from '../../typeorm/entities/Projetos'
import ProjetosRepository from '../../typeorm/repositories/ProjetosRepository'

interface IRequestDTO {
    testeId:any,
  }

class LoadProjetosByIdService{
    public async execute ({testeId}:IRequestDTO): Promise<Projetos | undefined> {
        
        const projetosRepository = getCustomRepository(ProjetosRepository);

        const funcao = await projetosRepository.findOne({
            testeId
        });

        const responseDTO = funcao;

        return responseDTO;
    }
}

export default LoadProjetosByIdService;