import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Carros from '../../../../shared/infra/typeorm/entities/Carros';
import CarrosRepository from '../../../../shared/infra/typeorm/repositories/CarrosRepository'
import RedisCache from '../../../../shared/cache/RedisCache';




interface IRequestDTO {
  id_uuid: string;
  placa:string;
  carro:string;
  ano: number;
  cor:string;
  km:string;
  ativo: number;
  garagem:string;
  id:number;



  }

  class CreateCargoService {

    public async create({ id_uuid,placa, carro,ano,cor, km,ativo,garagem,id}: IRequestDTO): Promise<Carros | Error> {

      const Repository = getCustomRepository(CarrosRepository);

      const redisCache = new RedisCache();


      const result = await Repository.findById(id_uuid);

      if (result) {
        throw new AppError('Nome já existe.',404);

      }

      const carros =  Repository.create({
        placa, carro,ano,cor, km,ativo,garagem,id


      });

      await redisCache.invalidation('API_REDIS_SUMMARY');

      await Repository.save(carros);

      return carros;
    }
  }

  export default CreateCargoService;
