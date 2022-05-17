import { Repository, EntityRepository,getRepository } from 'typeorm';

import Entities from '../entities/PagamentoView';



interface ICreate{

    uuidpagamento: string;
    linha: number;
    cliente:string;   
    empresa: string;
    departamento: string;
    nprojeto:string;
    contrato: string;
    contabn1: string;
    grupon2:string;
    subgrupon3: string;
    usuario: string;
    cpf_cnpj: string;
    valor_pago:string;
    data_pagto: string;
    data_vecto: string;
    banco:string;
    incidencia: string;
    parcelas_n: string;
    n_doc_pagto: string;
    formapagto:string;
    status: string;
    obs: string;


}

interface IRepository {
  
findById(uuid: string): Promise<Entities | undefined>;
create(data: ICreate): Promise<Entities>;
save(obj: Entities): Promise<Entities>;
remove(obj: Entities): Promise<Entities>;
findAll(): Promise <Entities[]>

}


@EntityRepository(Entities)

class PagamentoViewRepository implements IRepository {

  private ormRepository: Repository<Entities>;
  
    public async findById(uuid: string): Promise<Entities | undefined> {
      this.ormRepository = getRepository(Entities);
      const result = await this.ormRepository.findOne(uuid);
      return result;
  }
  public async create({
    
    uuidpagamento,
    linha,
    cliente,   
    empresa,
    departamento,
    nprojeto,
    contrato,
    contabn1,
    grupon2,
    subgrupon3,
    usuario,
    cpf_cnpj,
    valor_pago,
    data_pagto,
    data_vecto,
    banco,
    incidencia,
    parcelas_n,
    n_doc_pagto,
    formapagto,
    status,
    obs,
}: ICreate): Promise<Entities> {
    this.ormRepository = getRepository(Entities);

    const result = this.ormRepository.create({
      uuidpagamento,
      linha,
      cliente,   
      empresa,
      departamento,
      nprojeto,
      contrato,
      contabn1,
      grupon2,
      subgrupon3,
      usuario,
      cpf_cnpj,
      valor_pago,
      data_pagto,
      data_vecto,
      banco,
      incidencia,
      parcelas_n,
      n_doc_pagto,
      formapagto,
      status,
      obs,
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


export default PagamentoViewRepository;

