import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Pagamento from '../../../typeorm/entities/Pagamento';
import PagamentoRepository from '../../../typeorm/repositories/PagamentoRepository'



interface IRequestDTO {

  uuidpagamento: string;
  uuidcliente:string;
  empresa: string;
  uuiddeparta: string;  
  uuidprojeto:string;
  uuidcontrato: string;
  uuidcontabn1: string;
  uuidgrupon2:string;
  uuidsubgrupon3: string;
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

    public async update({ uuidpagamento,uuidcliente,empresa,uuiddeparta , uuidprojeto,uuidcontrato ,uuidcontabn1 ,uuidgrupon2 ,uuidsubgrupon3 ,uuidcolab_forne , valor_pago
      ,data_pagto , data_vecto,uuidbancos ,incidencia ,parcelas_n ,n_doc_pagto , uuidformapagto ,status ,obs}: IRequestDTO): Promise<Pagamento | Error> {

      const usersRepository = getCustomRepository(PagamentoRepository);

      const client = await usersRepository.findOne(uuidpagamento);

      if (!client) {
        throw new AppError ('client não existe',404);
      }


      client.uuidcliente = uuidcliente ? uuidcliente : client.uuidcliente;
      client.empresa = empresa ? empresa : client.empresa;
      client.uuiddeparta = uuiddeparta ? uuiddeparta : client.uuiddeparta;
      client.uuidprojeto = uuidprojeto ? uuidprojeto : client.uuidprojeto;
      client.uuidcontrato = uuidcontrato ? uuidcontrato : client.uuidcontrato;
      client.uuidcontabn1 = uuidcontabn1 ? uuidcontabn1 : client.uuidcontabn1;
      client.uuidgrupon2 = uuidgrupon2 ? uuidgrupon2 : client.uuidgrupon2;
      client.uuidsubgrupon3 = uuidsubgrupon3 ? uuidsubgrupon3 : client.uuidsubgrupon3;
      client.uuidcolab_forne = uuidcolab_forne ? uuidcolab_forne : client.uuidcolab_forne;
      client.valor_pago = valor_pago ? valor_pago : client.valor_pago;
      client.data_pagto = data_pagto ? data_pagto : client.data_pagto;
      client.data_vecto = data_vecto ? data_vecto : client.data_vecto;
      client.uuidbancos = uuidbancos ? uuidbancos : client.uuidbancos;
      client.incidencia = incidencia ? incidencia : client.incidencia;
      client.parcelas_n = parcelas_n ? parcelas_n : client.parcelas_n;
      client.n_doc_pagto = n_doc_pagto ? n_doc_pagto : client.n_doc_pagto;
      client.uuidformapagto = uuidformapagto ? uuidformapagto : client.uuidformapagto;
      client.status = status ? status : client.status;
      client.obs = obs ? obs : client.obs;


      await usersRepository.save(client);

      return client;
    }
  }

  export default UpdatePagamentoService;
