import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Manutencoes from '../../../../shared/infra/typeorm/entities/Manutencoes';
import ManuntencoesRepository from '../../../../shared/infra/typeorm/repositories/ManuntencoesRepository'
import RedisCache from '../../../../shared/cache/RedisCache';




interface IRequestDTO {
  cod_manutencao_uuid: string;
  descricao:string;
  valor: string;
  cod_manutencao: number;


  }

  class CreateManuntencoesService {

    public async create({ cod_manutencao_uuid,descricao,valor,cod_manutencao}: IRequestDTO): Promise<Manutencoes | Error> {

      const Repository = getCustomRepository(ManuntencoesRepository);

      const redisCache = new RedisCache();

      const result = await Repository.findById(cod_manutencao_uuid);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  Repository.create({

        cod_manutencao_uuid,descricao,valor,cod_manutencao

      });

      await redisCache.invalidation('API_REDIS_MANUTENCAO');

      await Repository.save(cliet);

      return cliet;
    }
  }

  export default CreateManuntencoesService;
