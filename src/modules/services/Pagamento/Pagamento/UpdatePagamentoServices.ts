import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Pagamento from '../../../typeorm/entities/Pagamento';
import PagamentoRepository from '../../../typeorm/repositories/PagamentoRepository'



interface IRequestDTO {

  uuidpagamento: string;
  empresa: string;
  uuidprojeto:string;
  uuidcontrato:string;
  n1: string;
  n2:string;
  n3: string;
  uuidcolab_forne: string;
  valor_pago:string;
  data_pagto: string;
  data_vecto: string;
  uuidbancos:string;
  incidencia: string;
  parcelas_n: string;
  n_doc_pagto: string;  
  uuidformapagto:string;
  status: string;
  obs: string;
  }

  class UpdatePagamentoService {

    public async update({ uuidpagamento, empresa, uuidprojeto,uuidcontrato, n1, n2, n3, uuidcolab_forne, valor_pago
      ,data_pagto, data_vecto, uuidbancos, incidencia, parcelas_n, n_doc_pagto, uuidformapagto, status, obs}: IRequestDTO): Promise<Pagamento | Error> {

      const usersRepository = getCustomRepository(PagamentoRepository);

      const result = await usersRepository.findOne(uuidpagamento);

      if (!result) {
        throw new AppError ('client não existe',404);
      }
      result.empresa = empresa ? empresa : result.empresa;
      result.uuidprojeto = uuidprojeto ? uuidprojeto : result.uuidprojeto;
      result.uuidcontrato = uuidcontrato ?uuidcontrato : result.uuidcontrato;
      result.n1 = n1 ? n1 : result.n1;
      result.n2 = n2 ? n2 : result.n2;
      result.n3 = n3 ? n3 : result.n3;
      result.uuidcolab_forne = uuidcolab_forne ? uuidcolab_forne : result.uuidcolab_forne;
      result.valor_pago = valor_pago ? valor_pago : result.valor_pago;
      result.data_pagto = data_pagto ? data_pagto : result.data_pagto;
      result.data_vecto = data_vecto ? data_vecto : result.data_vecto;
      result.uuidbancos = uuidbancos ? uuidbancos : result.uuidbancos;
      result.incidencia = incidencia ? incidencia : result.incidencia;
      result.parcelas_n = parcelas_n ? parcelas_n : result.parcelas_n;
      result.n_doc_pagto = n_doc_pagto ? n_doc_pagto : result.n_doc_pagto;
      result.uuidformapagto = uuidformapagto ? uuidformapagto : result.uuidformapagto;
      result.status = status ? status : result.status;
      result.obs = obs ? obs : result.obs;


      await usersRepository.save(result);

      return result;
    }
  }

  export default UpdatePagamentoService;
