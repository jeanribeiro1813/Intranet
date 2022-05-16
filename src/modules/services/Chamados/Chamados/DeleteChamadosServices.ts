import AppError from '../../../../shared/errors/AppErrors';
import Chamados from '../../../../shared/infra/typeorm/entities/Chamados';
import ChamadosRepository from '../../../../shared/infra/typeorm/repositories/ChamadosRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'


interface IRequestDTO{

  cod_chamado_uuid:string;

}



@injectable()
class DeleteChamadosService {

  constructor(
    @inject('ChamadosRepository')
    private chamadosRepository: ChamadosRepository){
    
  }


     public async delete( {cod_chamado_uuid}: IRequestDTO) : Promise<void> {

      const redisCache = new RedisCache();

      const service = await this.chamadosRepository.findById(cod_chamado_uuid);

      if (!service) {
        throw new AppError('Não Existe ',402);
      }

      await redisCache.invalidation('API_REDIS_CHAMADOS');

      await this.chamadosRepository.remove(service);
      
      }
  }

export default DeleteChamadosService;