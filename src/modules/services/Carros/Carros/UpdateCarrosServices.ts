import { getCustomRepository,getRepository } from 'typeorm'
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

  class UpdateCargoService {

    public async update({id_uuid,placa, carro,ano,cor, km,ativo,garagem,id}: IRequestDTO): Promise<Carros | Error> {

      const Repository = getCustomRepository(CarrosRepository);

      const redisCache = new RedisCache();

      const result = await Repository.findOne(id_uuid);

      if (!result) {
        throw new AppError ('carros não existe',404);
      }

      await redisCache.invalidation('API_REDIS_SUMMARY');

      result.placa = placa ? placa : result.placa;
      result.carro = carro ? carro : result.carro;
      result.ano = ano ? ano : result.ano;
      result.cor = cor ? cor : result.cor;
      result.km = km ? km : result.km;
      result.ativo = ativo ? ativo : result.ativo;
      result.garagem = garagem ? garagem : result.garagem;
      result.id = id ? id : result.id;



      await Repository.save(result);

      return result;
    }
  }

  export default UpdateCargoService;
