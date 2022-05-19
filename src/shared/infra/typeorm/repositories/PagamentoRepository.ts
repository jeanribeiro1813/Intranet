import { Repository, EntityRepository,getRepository } from 'typeorm';

import Entities from '../entities/Pagamento';


interface ICreate{

    uuidpagamento: string;
    empresa: string;
    uuidprojeto:string;
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
    sttpguuid: string;
    obs: string;
    linha: number;



}

interface IRepository {
findById(uuidpagamento: string): Promise<Entities | undefined>;
create(data: ICreate): Promise<Entities>;
save(obj: Entities): Promise<Entities>;
remove(obj: Entities): Promise<Entities>;
findAll(): Promise <Entities[]>

}


@EntityRepository(Entities)

 class PagamentoRepository implements IRepository {

    private ormRepository: Repository<Entities>;
    
      public async findById(uuidpagamento: string): Promise<Entities | undefined> {
        this.ormRepository = getRepository(Entities);
        const result = await this.ormRepository.findOne({uuidpagamento});
        return result;
    }
    public async create({
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
  }: ICreate): Promise<Entities> {
      this.ormRepository = getRepository(Entities);

      const result = this.ormRepository.create({
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

      await this.ormRepository.save(result);

      return result;
  }

  public async save(obj: Entities): Promise<Entities> {
      this.ormRepository = getRepository(Entities);
      return this.ormRepository.save(obj);
  }

  public async remove(obj: Entities): Promise<Entities> {
      this.ormRepository = getRepository(Entities);
      return this.ormRepository.remove(obj);
  }

  public async findAll():Promise<Entities[]>{
    this.ormRepository = getRepository(Entities);
    return this.ormRepository.find();
  }
}


export default PagamentoRepository;

