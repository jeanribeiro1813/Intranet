import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import FaturamentoRepository from '../../../typeorm/repositories/FaturamentoRepository'
import Faturamento from '../../../typeorm/entities/Faturamento'


interface IRequestDTO {

  uuidfat:string,
  uuidusuario:string;
  uuiddeparta:string;
  uuidprojeto:string;
  uuidcontrato:string;
  uuidativida:string;
  data:string;
  inicio:string;
  fim:string;
  status:string;
  obs:string;
  empresa:string;
  uuidcliente:string

  }

  class CreatefaturaService {

    public async update({uuidfat,uuidusuario, uuiddeparta, uuidprojeto,uuidcontrato,uuidativida,data,inicio,fim,status,obs,empresa,uuidcliente}: IRequestDTO): Promise<Faturamento | Error> {

      const usersRepository = getCustomRepository(FaturamentoRepository);

      const fatura = await usersRepository.findOne(uuidfat);

      if (!fatura) {
        throw new AppError ('fatura não existe',404);
      }


      fatura.uuidfat = uuidfat ? uuidfat : fatura.uuidfat;
      fatura.uuidusuario = uuidusuario ? uuidusuario : fatura.uuidusuario;
      fatura.uuiddeparta = uuiddeparta ? uuiddeparta : fatura.uuiddeparta;
      fatura.uuidprojeto = uuidprojeto ? uuidprojeto : fatura.uuidprojeto;
      fatura.uuidcontrato = uuidcontrato ? uuidcontrato : fatura.uuidcontrato;
      fatura.uuidativida = uuidativida ? uuidativida : fatura.uuidativida;
      fatura.data = data ? data : fatura.data;
      fatura.inicio = inicio ? inicio : fatura.inicio;
      fatura.fim = fim ? fim : fatura.fim;
      fatura.status = status ? status: fatura.status;
      fatura.obs = obs ? obs: fatura.obs;
      fatura.empresa = empresa ? empresa: fatura.empresa;
      fatura.uuidcliente = uuidcliente ? uuidcliente: fatura.uuidcliente;




      await usersRepository.save(fatura);

      return fatura;
    }
  }

  export default CreatefaturaService;
