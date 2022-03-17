import { getCustomRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Faturamento from '../../../modules/typeorm/entities/Faturamento';
import FaturamentoRepository from '../../../modules/typeorm/repositories/FaturamentoRepository'




interface IRequestDTO {
    cod_fat:string,
    usuario:any;
    departamento:string;
    cod_proj:any;
    contrato:string;
    atividade:string;
    data_:string;
    inicio:string;
    fim:string;
    nome_proj:string;


  }

  class CreateFatService {

    public async execute({ cod_fat,usuario, departamento, cod_proj,nome_proj,contrato,atividade,data_,inicio,fim}: IRequestDTO): Promise<Faturamento | Error> {

      const fatRepository = getCustomRepository(FaturamentoRepository);

      const checkUserExists = await fatRepository.findByCode(cod_fat);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const fat =  fatRepository.create({
        usuario,
         departamento,
          cod_proj,
          nome_proj,
          contrato,
          atividade,
          data_,
          inicio,
          fim,


      });

      await fatRepository.save(fat);

      return fat;
    }
  }

  export default CreateFatService;
