import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Departamento from '../../../../shared/infra/typeorm/entities/Departamento';
import DepartamentoRepository from '../../../../shared/infra/typeorm/repositories/DepartamentoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'



interface IRequestDTO {

  uuiddeparta: string;
  departamento:string;

  }

  @injectable()
  class UpdateClientService {
  
    constructor(
      @inject('DepartamentoRepository')
      private departamentoRepository: DepartamentoRepository){
      
    }

    public async update({uuiddeparta,departamento}: IRequestDTO): Promise<Departamento | Error> {
     
      const redisCache = new RedisCache();

      const result = await this.departamentoRepository.findById(uuiddeparta);

      if (!result) {
        throw new AppError ('client não existe',404);
      }

      await redisCache.invalidation('API_REDIS_DEPARTAMENTO');

      result.departamento = departamento ? departamento : result.departamento;

      await this.departamentoRepository.save(result);

      return result;
    }
  }

  export default UpdateClientService;
