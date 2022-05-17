import AppError from '../../../../shared/errors/AppErrors';
import Pagamento from '../../../../shared/infra/typeorm/entities/Pagamento';
import PagamentoRepository from '../../../../shared/infra/typeorm/repositories/PagamentoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'


interface IRequestDTO {
 

  uuidpagamento: string;
  uuidcontrato:string;
  empresa: string; 
  uuidprojeto:string;
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


  @injectable()
class CreatePagamentoService {

    constructor(
        @inject('PagamentoRepository')
        private PagamentoRepository: PagamentoRepository){
        
      }

    public async execute({ uuidpagamento, empresa, uuidprojeto, n1, n2 , n3, uuidcolab_forne , valor_pago,uuidcontrato
      ,data_pagto , data_vecto,uuidbancos ,incidencia ,parcelas_n ,n_doc_pagto , uuidformapagto ,status ,obs}: IRequestDTO): Promise<Pagamento | AppError> {

      const redisCache = new RedisCache();

      const checkUserExists = await this.PagamentoRepository.findById(uuidpagamento);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  this.PagamentoRepository.create({

        uuidpagamento, empresa, uuidprojeto, n1, n2 , n3, uuidcolab_forne , valor_pago,uuidcontrato
        ,data_pagto , data_vecto,uuidbancos ,incidencia ,parcelas_n ,n_doc_pagto , uuidformapagto ,status ,obs
      });


      await redisCache.invalidation('API_REDIS_PAGAMENTO');

      return cliet;
    }
  }

  export default CreatePagamentoService;
