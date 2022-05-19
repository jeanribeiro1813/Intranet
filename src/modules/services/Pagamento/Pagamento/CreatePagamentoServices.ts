import AppError from '../../../../shared/errors/AppErrors';
import Pagamento from '../../../../shared/infra/typeorm/entities/Pagamento';
import PagamentoRepository from '../../../../shared/infra/typeorm/repositories/PagamentoRepository'
import RedisCache from '../../../../shared/cache/RedisCache';
import {injectable, inject} from 'tsyringe'


interface IRequestDTO {
 

  uuidpagamento: string;
  uuidprojeto:string;
  empresa: string;
  uuidn1: string;
  uuidn2:string;
  uuidn3: string;
  uuidcolab_forne: string;
  valor_pago:number;
  data_pagto: string;
  data_vecto: string;
  uuidbancos:string;
  incidencia: string;
  parcelas_n: string;
  n_doc_pagto: string;
  uuidformapagto:string;
  obs: string;
  sttpguuid: string;
  linha: number;

  }


  @injectable()
class CreatePagamentoService {

    constructor(
        @inject('PagamentoRepository')
        private PagamentoRepository: PagamentoRepository){
        
      }

    public async execute({uuidpagamento,uuidprojeto,empresa,
      uuidn1,
      uuidn2,
      uuidn3,
      uuidcolab_forne,
      valor_pago,
      data_pagto,
      data_vecto,
      uuidbancos,
      incidencia,
      parcelas_n,
      n_doc_pagto,
      uuidformapagto,
      obs,
      sttpguuid,
      linha}: IRequestDTO): Promise<Pagamento | AppError> {

      const redisCache = new RedisCache();

      const checkUserExists = await this.PagamentoRepository.findById(uuidpagamento);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  this.PagamentoRepository.create({

        uuidpagamento,
        empresa,
        uuidprojeto,
        uuidn1,
        uuidn2,
        uuidn3,
        uuidcolab_forne,
        valor_pago,
        data_pagto,
        data_vecto,
        uuidbancos,
        incidencia,
        parcelas_n,
        n_doc_pagto,
        uuidformapagto,
        sttpguuid,
        obs,linha
      });


      await redisCache.invalidation('API_REDIS_PAGAMENTO');

      return cliet;
    }
  }

  export default CreatePagamentoService;
