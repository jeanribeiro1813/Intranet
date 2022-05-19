import StatusPagamento from "../../../../shared/infra/typeorm/entities/StatusPagamento";
import { getCustomRepository } from "typeorm";
import StatusPagamentoRepository from '../../../../shared/infra/typeorm/repositories/StatusPagamentoRepository'
import AppError from "../../../../shared/errors/AppErrors";
import RedisCache from '../../../../shared/cache/RedisCache';


class SummaryStatusPagamento{
    public async summary (): Promise<StatusPagamento[] | AppError> {
        const projetosrRepository = getCustomRepository(StatusPagamentoRepository);

        const redisCache = new RedisCache();

        let responseDTO = await redisCache.recover<StatusPagamento[]>('API_REDIS_STATUSPAGAMENTO')

        if(!responseDTO){

            responseDTO  = await projetosrRepository.find();
            
            //Criando um save Redis

            await redisCache.save('API_REDIS_STATUSPAGAMENTO',responseDTO)
        }

        return responseDTO;
    }
}

export default SummaryStatusPagamento;
