import AppError from '../../../../shared/errors/AppErrors';
import DepartamentoRepository from '../../../../shared/infra/typeorm/repositories/DepartamentoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'


interface IRequestDTO{

  uuiddeparta: string;

}

@injectable()
class DeleteClientesService {

  constructor(
    @inject('DepartamentoRepository')
    private departamentoRepository: DepartamentoRepository){
    
  }

     public async execute( {uuiddeparta}: IRequestDTO) : Promise<void> {

      const redisCache = new RedisCache();

      const result = await this.departamentoRepository.findById(uuiddeparta);

      if (!result) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_DEPARTAMENTO');

      await this.departamentoRepository.remove(result);
      }
  }

export default DeleteClientesService;