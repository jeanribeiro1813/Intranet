import { getCustomRepository } from 'typeorm'
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

  class CreatePagamentoService {

    public async execute({ uuidpagamento,uuidcliente,empresa,uuiddeparta , uuidprojeto,uuidcontrato ,uuidcontabn1 ,uuidgrupon2 ,uuidsubgrupon3 ,uuidcolab_forne , valor_pago
      ,data_pagto , data_vecto,uuidbancos ,incidencia ,parcelas_n ,n_doc_pagto , uuidformapagto ,status ,obs}: IRequestDTO): Promise<Pagamento | AppError> {

      const clientesRepository = getCustomRepository(PagamentoRepository);

      const checkUserExists = await clientesRepository.findByCode(uuidpagamento);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  clientesRepository.create({

        uuidpagamento,uuidcliente,empresa,uuiddeparta , uuidprojeto,uuidcontrato ,uuidcontabn1 ,uuidgrupon2 ,uuidsubgrupon3 ,uuidcolab_forne , valor_pago
        ,data_pagto , data_vecto,uuidbancos ,incidencia ,parcelas_n ,n_doc_pagto , uuidformapagto ,status ,obs
      });

      await clientesRepository.save(cliet);

      return cliet;
    }
  }

  export default CreatePagamentoService;
