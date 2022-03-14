import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Faturamento from '../../typeorm/entities/Faturamento';
import FaturamentoRepository from '../../typeorm/repositories/FaturamentoRepository'


interface IRequestDTO {
  cod_fat:string;
  cod_user:number;
  departamento:string;
  cod_proj:number;
  contrato:string;
  cod_ativ:number;
  data_:string;
  inicio:string;
  fim:string;
  }

  class CreatefaturaService {

    public async update({cod_fat,cod_user, departamento, cod_proj, contrato, cod_ativ, data_, inicio, fim}: IRequestDTO): Promise<Faturamento | Error> {

      const usersRepository = getRepository(Faturamento);

      const fatura = await usersRepository.findOne(cod_fat);

      if (!fatura) {
        throw new AppError ('fatura não existe',404);
      }

      fatura.cod_user = cod_user ? cod_user : fatura.cod_user;
      fatura.departamento = departamento ? departamento : fatura.departamento;
      fatura.cod_proj = cod_proj ? cod_proj : fatura.cod_proj;
      fatura.contrato = contrato ? contrato : fatura.contrato;
      fatura.cod_ativ = cod_ativ ? cod_ativ : fatura.cod_ativ;
      fatura.data_ = data_ ? data_ : fatura.data_;
      fatura.inicio = inicio ? inicio : fatura.inicio;
      fatura.fim = fim ? fim : fatura.fim;



      await usersRepository.save(fatura);

      return fatura;
    }
  }

  export default CreatefaturaService;
