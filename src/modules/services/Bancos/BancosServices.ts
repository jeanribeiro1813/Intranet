import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Entitie from '../../typeorm/entities/Bancos';
import Repository from '../../typeorm/repositories/BancosRepository'


interface IDescItemOfSummary {
  uuidbanco: string;
  codigo:string;
  descricao: string;
}

interface IRequestDTO {
  uuidbanco: string;
  codigo: string;
  descricao: string;
}

interface IResponseDTO {
  summary: IDescItemOfSummary[];
}

  class CreateServices {

    public async create({uuidbanco, codigo, descricao}: IRequestDTO): Promise<Entitie | Error> {

      const repository = getCustomRepository(Repository);

      const checkUserExists = await repository.findById(uuidbanco);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const result =  repository.create({

        uuidbanco, codigo, descricao

      });

      await repository.save(result);

      return result;
    }

    public async read (): Promise<IResponseDTO> {

      const repository = getCustomRepository(Repository);

      const list = await repository.find({});

      const summary = list.map((obj) =>{
          const DescItemOfSummary = {
              uuidbanco:obj.uuidbanco,
              codigo:obj.codigo,
              descricao:obj.descricao

          }
          return DescItemOfSummary;
          }

      )

      const responseDTO = {
          summary,
      };

      return responseDTO;
    }

    public async update({uuidbanco, codigo, descricao}: IRequestDTO): Promise<Entitie | Error> {

      const repository = getCustomRepository(Repository);

      const result = await repository.findOne(uuidbanco);

      if (!result) {
        throw new AppError ('Dados não existe',404);
      }


      result.codigo = codigo ? codigo : result.codigo;
      result.descricao = descricao ? descricao : result.descricao;
  

      await repository.save(result);

      return result;

    }

    public async delete( {uuidbanco}: IRequestDTO) : Promise<void> {

      const repository = getCustomRepository(Repository);

      const result = await repository.findOne(uuidbanco);

      if (!result) {
        throw new AppError('Não Existe ',402);
      }
      await repository.remove(result);
    }


  }

  export default CreateServices;
