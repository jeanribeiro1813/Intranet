import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Entitie from '../../typeorm/entities/FormPag';
import Repository from '../../typeorm/repositories/FormPagRepository';


interface IDescItemOfSummary {
  uuidformpag: string;
  codigo:string;
  descricao: string;
}

interface IRequestDTO {
  uuidformpag: string;
  codigo: string;
  descricao: string;
}

interface IRequestDelete {
  uuidformpag: string;
}

interface IResponseDTO {
  summary: IDescItemOfSummary[];
}

  class CreateServices {

    public async create({uuidformpag, codigo, descricao}: IRequestDTO): Promise<Entitie | Error> {

      const repository = getCustomRepository(Repository);

      const checkUserExists = await repository.findById(uuidformpag);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const result =  repository.create({

        uuidformpag, codigo, descricao

      });

      await repository.save(result);

      return result;
    }

    public async summary (): Promise<IResponseDTO> {

      const repository = getCustomRepository(Repository);

      const list = await repository.find({});

      const summary = list.map((obj) =>{
          const DescItemOfSummary = {
              uuidformpag:obj.uuidformpag,
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

    public async update({uuidformpag, codigo, descricao}: IRequestDTO): Promise<Entitie | Error> {

      const repository = getCustomRepository(Repository);

      const result = await repository.findOne(uuidformpag);

      if (!result) {
        throw new AppError ('Dados não existe',404);
      }


      result.codigo = codigo ? codigo : result.codigo;
      result.descricao = descricao ? descricao : result.descricao;
  

      await repository.save(result);

      return result;

    }

    public async delete( {uuidformpag}: IRequestDelete) : Promise<void> {

      const repository = getCustomRepository(Repository);

      const result = await repository.findOne({uuidformpag});

      if (!result) {
        throw new AppError('Não Existe ',402);
      }
      await repository.remove(result);
    }


  }

  export default CreateServices;
