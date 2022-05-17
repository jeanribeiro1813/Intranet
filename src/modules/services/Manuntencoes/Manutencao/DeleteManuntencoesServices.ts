import AppError from '../../../../shared/errors/AppErrors';
import { getCustomRepository,getRepository } from 'typeorm'
import Manutencoes from '../../../../shared/infra/typeorm/entities/Manutencoes';
import ManuntencoesRepository from '../../../../shared/infra/typeorm/repositories/ManuntencoesRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'



interface IRequestDTO{

  cod_manutencao_uuid: string;
}

@injectable()
class DeleteManutencaoService {

    constructor(
        @inject('ManuntencoesRepository')
        private manutencaoresRepository: ManuntencoesRepository){
        
      }

     public async delete( {cod_manutencao_uuid}: IRequestDTO) : Promise<void> {

      const redisCache = new RedisCache();

      const service = await this.manutencaoresRepository.findById(cod_manutencao_uuid);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_MANUTENCAO');

      await this.manutencaoresRepository.remove(service);
      }
  }

export default DeleteManutencaoService;