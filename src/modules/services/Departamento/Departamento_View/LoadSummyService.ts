import { getCustomRepository } from "typeorm";
import Departamento from '../../../../shared/infra/typeorm/entities/Departamento';
import DepartamentoRepository from '../../../../shared/infra/typeorm/repositories/DepartamentoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import AppError from "../../../../shared/errors/AppErrors";


class LoadClientesSummaryService{
    
    public async summary (): Promise<Departamento[]| AppError> {
        const projetosrRepository = getCustomRepository(DepartamentoRepository);

        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<Departamento[]>('API_REDIS_DEPARTAMENTO')


        if(!responseDTO){

            responseDTO  = await projetosrRepository.find();
            
            //Criando um save Redis

            await redisCache.save('API_REDIS_DEPARTAMENTO',responseDTO)
        }
        
        
        return responseDTO;
    }
}

export default LoadClientesSummaryService;
