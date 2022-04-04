import { getCustomRepository } from 'typeorm'
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

  class CreateCargoService {

    public async execute({ id_uuid,placa, carro,ano,cor, km,ativo,garagem,id}: IRequestDTO): Promise<Carros | Error> {

      const carrosRepository = getCustomRepository(CarrosRepository);

      const checkUserExists = await carrosRepository.findById(id_uuid);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const carros =  carrosRepository.create({
        placa, carro,ano,cor, km,ativo,garagem,id


      });

      await carrosRepository.save(carros);

      return carros;
    }
  }

  export default CreateCargoService;
