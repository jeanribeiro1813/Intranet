import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Faturamento from '../../../modules/typeorm/entities/Faturamento';
import FaturamentoRepository from '../../../modules/typeorm/repositories/FaturamentoRepository'


interface IRequestDTO {
  cod_fat:string;
  usuario:number;
  departamento:string;
  cod_proj:number;
  contrato:string;
  atividade:string;
  data_:string;
  inicio:string;
  fim:string;
  }

  class CreatefaturaService {

    public async update({cod_fat,usuario, departamento, cod_proj, contrato, atividade, data_, inicio, fim}: IRequestDTO): Promise<Faturamento | Error> {

      const usersRepository = getRepository(Faturamento);

      const fatura = await usersRepository.findOne(cod_fat);

      if (!fatura) {
        throw new AppError ('fatura não existe',404);
      }


      fatura.usuario = usuario ? usuario : fatura.usuario;
      fatura.departamento = departamento ? departamento : fatura.departamento;
      fatura.cod_proj = cod_proj ? cod_proj : fatura.cod_proj;
      fatura.contrato = contrato ? contrato : fatura.contrato;
      fatura.atividade = atividade ? atividade : fatura.atividade;
      fatura.data_ = data_ ? data_ : fatura.data_;
      fatura.inicio = inicio ? inicio : fatura.inicio;
      fatura.fim = fim ? fim : fatura.fim;



      await usersRepository.save(fatura);

      return fatura;
    }
  }

  export default CreatefaturaService;
