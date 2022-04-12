import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Manutencoes from '../../typeorm/entities/Manutencoes';
import ManuntencoesRepository from '../../typeorm/repositories/ManuntencoesRepository'




interface IRequestDTO {
  cod_manutencao_uuid: string;
  descricao:string;
  valor: string;
  cod_manutencao: number;


  }
  class UpdateManutencaoService {

    public async update({ cod_manutencao_uuid,descricao,valor,cod_manutencao}: IRequestDTO): Promise<Manutencoes | Error> {

      const usersRepository = getCustomRepository(ManuntencoesRepository);

      const manute = await usersRepository.findOne(cod_manutencao_uuid);

      if (!manute) {
        throw new AppError ('manuteção não existe',404);
      }


      manute.descricao = descricao ? descricao : manute.descricao;
      manute.valor = valor ? valor : manute.valor;
      //manute.cod_manutencao = cod_manutencao ? cod_manutencao : manute.cod_manutencao;

      await usersRepository.save(manute);

      return manute;
    }
  }

  export default UpdateManutencaoService;
