import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Carros from '../../typeorm/entities/Carros';
import CarrosRepository from '../../typeorm/repositories/CarrosRepository'



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

      const usersRepository = getCustomRepository(CarrosRepository);

      const carros = await usersRepository.findOne(id_uuid);

      if (!carros) {
        throw new AppError ('carros não existe',404);
      }


      carros.placa = placa ? placa : carros.placa;
      carros.carro = carro ? carro : carros.carro;
      carros.ano = ano ? ano : carros.ano;
      carros.cor = cor ? cor : carros.cor;
      carros.km = km ? km : carros.km;
      carros.ativo = ativo ? ativo : carros.ativo;
      carros.garagem = garagem ? garagem : carros.garagem;
      carros.id = id ? id : carros.id;



      await usersRepository.save(carros);

      return carros;
    }
  }

  export default UpdateCargoService;
