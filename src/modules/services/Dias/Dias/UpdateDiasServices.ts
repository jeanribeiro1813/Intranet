import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Dias from '../../../../shared/infra/typeorm/entities/Dias';
import DiasRepository from '../../../../shared/infra/typeorm/repositories/DiasRepository'



interface IRequestDTO {

  uuiddiasuteis: string;
  ano:string;
  mes: string;
  codigo: string;
  dias: string;

  }

  class UpdatePaginasService {

    public async update({uuiddiasuteis,ano,mes,codigo,dias}: IRequestDTO): Promise<Dias | AppError> {

      const Repository = getCustomRepository(DiasRepository);

      const result = await Repository.findOne(uuiddiasuteis);

      if (!result) {
        throw new AppError ('client não existe',404);
      }


      result.ano = ano ? ano : result.ano;
      result.mes = mes ? mes : result.mes;
      result.codigo = codigo ? codigo : result.codigo;
      result.dias = dias ? dias : result.dias;
  

      await Repository.save(result);

      return result;
    }
  }

  export default UpdatePaginasService;
