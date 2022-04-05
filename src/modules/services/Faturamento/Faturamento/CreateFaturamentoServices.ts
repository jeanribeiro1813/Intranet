import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Faturamento from '../../../typeorm/entities/Faturamento';
import FaturamentoRepository from '../../../typeorm/repositories/FaturamentoRepository'




interface IRequestDTO {
    codfat:string,
    codusuario:string;
    coddeparta:string;
    codprojeto:string;
    contrato:string;
    codativida:string;
    data:string;
    inicio:string;
    fim:string;
    status:string;
    obs:string;


  }

  class CreateFatService {

    public async execute({ codfat,codusuario, coddeparta, codprojeto,contrato,codativida,data,inicio,fim,status,obs}: IRequestDTO): Promise<Faturamento | Error> {

      const fatRepository = getCustomRepository(FaturamentoRepository);

      const checkUserExists = await fatRepository.findByCode(codfat);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const fat =  fatRepository.create({
        codfat,codusuario, coddeparta, codprojeto,contrato,codativida,data,inicio,fim,status,obs


      });

      await fatRepository.save(fat);

      return fat;
    }
  }

  export default CreateFatService;
