import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Faturamento from '../../../typeorm/entities/Faturamento';
import FaturamentoRepository from '../../../typeorm/repositories/FaturamentoRepository'




interface IRequestDTO {
  uuidfat:string,
  uuidusuario:string;
  uuidprojeto:string;
  uuidatividade:string;
  data:string;
  inicio:string;
  fim:string;
  status:string;
  obs:string;
  empresa:string;

  }

  class CreateFatService {

    public async create({ uuidfat,uuidusuario, uuidprojeto,uuidatividade,data,inicio,fim,status,obs,empresa}: IRequestDTO): Promise<Faturamento | Error> {

      const Repository = getCustomRepository(FaturamentoRepository);

      const faturamento = await Repository.findByCode(uuidfat);

      if (faturamento) {
        throw new AppError('Nome já existe.',404);

      }

      const fat =  Repository.create({
        
        uuidfat,uuidusuario, uuidprojeto, uuidatividade,data,inicio,fim,status,obs,empresa
       
        /*
        uuidcliente
        uuiddeparta Fazer update para verificar pela a tabela departamento*/


      });

      await Repository.save(fat);

      return fat;
    }
  }

  export default CreateFatService;
