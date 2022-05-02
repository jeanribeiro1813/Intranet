import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Entitie from '../../typeorm/entities/N3';
import Repository from '../../typeorm/repositories/N3Repository'


interface IDescItemOfSummary {
  uuidn3: string;
  codigo:string;
  descricao: string;
}

interface IRequestDTO {
  uuidn3: string;
  codigo:string;
  descricao: string;
}

interface IRequestDelete {
  uuidn3: string;
 
}

interface IResponseDTO {
  summary: IDescItemOfSummary[];
}

  class CreateServices {

    public async create({uuidn3, codigo, descricao}: IRequestDTO): Promise<Entitie | Error> {

      const repository = getCustomRepository(Repository);

      const checkUserExists = await repository.findById(codigo);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const result =  repository.create({

        uuidn3, codigo, descricao

      });

      await repository.save(result);

      return result;
    }

    public async read (): Promise<IResponseDTO> {

      const repository = getCustomRepository(Repository);

      const list = await repository.find({});

      const summary = list.map((obj) =>{
          const DescItemOfSummary = {
              uuidn3:obj.uuidn3,
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

    public async update({uuidn3, codigo, descricao}: IRequestDTO): Promise<Entitie | Error> {

      const repository = getCustomRepository(Repository);

      const result = await repository.findOne(uuidn3);

      if (!result) {
        throw new AppError ('Dados não existe',404);
      }


      result.codigo = codigo ? codigo : result.codigo;
      result.descricao = descricao ? descricao : result.descricao;
  

      await repository.save(result);

      return result;

    }

    public async delete( {uuidn3}: IRequestDelete) : Promise<void> {

      const repository = getCustomRepository(Repository);

      const result = await repository.findOne(uuidn3);

      if (!result) {
        throw new AppError('Não Existe ',402);
      }
      await repository.remove(result);
    }


  }

  export default CreateServices;
