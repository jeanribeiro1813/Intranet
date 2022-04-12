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

    public async execute({ uuidfat,uuidusuario, uuidprojeto,uuidatividade,data,inicio,fim,status,obs,empresa}: IRequestDTO): Promise<Faturamento | Error> {

      const fatRepository = getCustomRepository(FaturamentoRepository);

      const checkUserExists = await fatRepository.findByCode(uuidfat);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const fat =  fatRepository.create({
        
        uuidfat,uuidusuario, uuidprojeto, uuidatividade,data,inicio,fim,status,obs,empresa
       
        /*
        uuidcliente
        uuiddeparta Fazer update para verificar pela a tabela departamento*/


      });

      await fatRepository.save(fat);

      return fat;
    }
  }

  export default CreateFatService;
