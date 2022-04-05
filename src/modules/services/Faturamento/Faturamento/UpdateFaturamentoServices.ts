import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import FaturamentoRepository from '../../../typeorm/repositories/FaturamentoRepository'
import Faturamento from '../../../typeorm/entities/Faturamento'


interface IRequestDTO {
  codfat:string,
  codusuario:any;
  coddeparta:string;
  codprojeto:any;
  contrato:string;
  codativida:string;
  data:string;
  inicio:string;
  fim:string;
  status:string;
  obs:string;
  }

  class CreatefaturaService {

    public async update({codfat,codusuario, coddeparta, codprojeto,codativida,data,inicio,fim,status,obs}: IRequestDTO): Promise<Faturamento | Error> {

      const usersRepository = getCustomRepository(FaturamentoRepository);

      const fatura = await usersRepository.findOne(codfat);

      if (!fatura) {
        throw new AppError ('fatura não existe',404);
      }


      fatura.codusuario = codusuario ? codusuario : fatura.codusuario;
      fatura.coddeparta = coddeparta ? coddeparta : fatura.coddeparta;
      fatura.codprojeto = codprojeto ? codprojeto : fatura.codprojeto;
      fatura.codativida = codativida ? codativida : fatura.codativida;
      fatura.data = data ? data : fatura.data;
      fatura.inicio = inicio ? inicio : fatura.inicio;
      fatura.fim = fim ? fim : fatura.fim;
      fatura.status = status ? status: fatura.status;
      fatura.obs = obs ? obs: fatura.obs;



      await usersRepository.save(fatura);

      return fatura;
    }
  }

  export default CreatefaturaService;
