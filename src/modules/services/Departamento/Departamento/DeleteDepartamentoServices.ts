import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Departamento from '../../../../shared/infra/typeorm/entities/Departamento';
import DepartamentoRepository from '../../../../shared/infra/typeorm/repositories/DepartamentoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';


interface IRequestDTO{

  uuiddeparta: string;

}
 class DeleteClientesService {

     public async execute( {uuiddeparta}: IRequestDTO) : Promise<void> {

      const Repository = getCustomRepository(DepartamentoRepository);

      const redisCache = new RedisCache();

      const result = await Repository.findOne(uuiddeparta);

      if (!result) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_DEPARTAMENTO');

      await Repository.remove(result);
      }
  }

export default DeleteClientesService;