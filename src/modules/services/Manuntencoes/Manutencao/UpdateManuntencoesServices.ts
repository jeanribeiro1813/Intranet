import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Manutencoes from '../../../../shared/infra/typeorm/entities/Manutencoes';
import ManuntencoesRepository from '../../../../shared/infra/typeorm/repositories/ManuntencoesRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'




interface IRequestDTO {
  cod_manutencao_uuid: string;
  descricao:string;
  valor: string;
  cod_manutencao: number;

  }

  @injectable()
class UpdateManutencaoService {

    constructor(
        @inject('ManuntencoesRepository')
        private manutencaoresRepository: ManuntencoesRepository){
        
      }

    public async update({ cod_manutencao_uuid,descricao,valor,cod_manutencao}: IRequestDTO): Promise<Manutencoes | Error> {

      const redisCache = new RedisCache();

      const manute = await this.manutencaoresRepository.findById(cod_manutencao_uuid);

      if (!manute) {
        throw new AppError ('manuteção não existe',404);
      }


      await redisCache.invalidation('API_REDIS_MANUTENCAO');

      manute.descricao = descricao ? descricao : manute.descricao;
      manute.valor = valor ? valor : manute.valor;
      //manute.cod_manutencao = cod_manutencao ? cod_manutencao : manute.cod_manutencao;

      await this.manutencaoresRepository.save(manute);

      return manute;
    }
  }

  export default UpdateManutencaoService;
