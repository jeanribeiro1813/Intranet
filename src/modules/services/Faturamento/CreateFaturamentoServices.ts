import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Faturamento from '../../typeorm/entities/Faturamento';
import FaturamentoRepository from '../../typeorm/repositories/FaturamentoRepository'




interface IRequestDTO {
    cod_fat:string,
    cod_user:any;
    departamento:string;
    cod_proj:any;
    contrato:string;
    cod_ativ:any;
    data_:string;
    inicio:string;
    fim:string;


  }

  class CreateFatService {

    public async execute({ cod_fat,cod_user, departamento, cod_proj,contrato,cod_ativ,data_,inicio,fim}: IRequestDTO): Promise<Faturamento | Error> {

      const fatRepository = getCustomRepository(FaturamentoRepository);

      const checkUserExists = await fatRepository.findByCode(cod_fat);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const fat =  fatRepository.create({
        cod_user,
         departamento,
          cod_proj,
          contrato,
          cod_ativ,
          data_,
          inicio,
          fim


      });

      await fatRepository.save(fat);

      return fat;
    }
  }

  export default CreateFatService;
