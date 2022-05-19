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
class UpdatePagamentoService {

    constructor(
        @inject('PagamentoRepository')
        private PagamentoRepository: PagamentoRepository){
        
        }

    public async update({ uuidpagamento,uuidprojeto,
      empresa,
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
      linha}: IRequestDTO): Promise<Pagamento | Error> {

      const redisCache = new RedisCache();

      const result = await this.PagamentoRepository.findById(uuidpagamento);

      if (!result) {
        throw new AppError ('client não existe',404);
      }

      await redisCache.invalidation('API_REDIS_PAGAMENTO');

      result.empresa = empresa ? empresa : result.empresa;
      result.uuidprojeto = uuidprojeto? uuidprojeto : result.uuidprojeto;
      result.uuidn1 = uuidn1 ? uuidn1 : result.uuidn1;
      result.uuidn2 = uuidn2 ? uuidn2 : result.uuidn2;
      result.uuidn3 = uuidn3 ? uuidn3 : result.uuidn3;
      result.uuidcolab_forne = uuidcolab_forne ? uuidcolab_forne : result.uuidcolab_forne;
      result.valor_pago = valor_pago ? valor_pago : result.valor_pago;
      result.data_pagto = data_pagto ? data_pagto : result.data_pagto;
      result.data_vecto = data_vecto ? data_vecto : result.data_vecto;
      result.uuidbancos = uuidbancos ? uuidbancos : result.uuidbancos;
      result.incidencia = incidencia ? incidencia : result.incidencia;
      result.parcelas_n = parcelas_n ? parcelas_n : result.parcelas_n;
      result.n_doc_pagto = n_doc_pagto ? n_doc_pagto : result.n_doc_pagto;
      result.uuidformapagto = uuidformapagto ? uuidformapagto : result.uuidformapagto;
      result.sttpguuid = sttpguuid ? sttpguuid : result.sttpguuid;
      result.obs = obs ? obs : result.obs;
      result.linha = linha ? linha : result.linha;



      await this.PagamentoRepository.save(result);

      return result;
    }
  }

  export default UpdatePagamentoService;
