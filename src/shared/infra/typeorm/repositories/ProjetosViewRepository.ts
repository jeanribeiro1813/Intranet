import { Repository, EntityRepository,getRepository } from 'typeorm';

import Entities from '../entities/ProjetosView';

interface ICreate{

  uuidprojeto: string;
  nprojeto: string;
  projeto:string ;
  data:string ;
  uuiddeparta:string ;
  departamento:string;
  uuidcontrato:string ;
  contrato:string ;
  uuidcliente:string ;
  cliente:string ;
  numero:string ;
  gerente:string ;
  coordenador:string ;
  equipe:string ;
  status:string ;
  proposta:string ;
  previsao:string ;
  nproc_origem:string ;
  valor:string ;
  memoalt:string ;
  dt_fim:string

}

interface IRepository {
findById(uuid: string): Promise<Entities | undefined>;
create(data: ICreate): Promise<Entities>;
save(obj: Entities): Promise<Entities>;
remove(obj: Entities): Promise<Entities>;
findAll(): Promise <Entities[]>

}


@EntityRepository(Entities)

class ProjetosViewRepository implements IRepository {

  private ormRepository: Repository<Entities>;
  
    public async findById(uuid: string): Promise<Entities | undefined> {
      this.ormRepository = getRepository(Entities);
      const result = await this.ormRepository.findOne(uuid);
      return result;
  }
  public async create({
    
    uuidprojeto,
    nprojeto,
    projeto,
    data,
    uuiddeparta,
    departamento,
    uuidcontrato,
    contrato,
    uuidcliente,
    cliente,
    numero,
    gerente,
    coordenador,
    equipe,
    status,
    proposta,
    previsao,
    nproc_origem,
    valor,
    memoalt,
    dt_fim,
}: ICreate): Promise<Entities> {
    this.ormRepository = getRepository(Entities);

    const result = this.ormRepository.create({
      uuidprojeto,
      nprojeto,
      projeto,
      data,
      uuiddeparta,
      departamento,
      uuidcontrato,
      contrato,
      uuidcliente,
      cliente,
      numero,
      gerente,
      coordenador,
      equipe,
      status,
      proposta,
      previsao,
      nproc_origem,
      valor,
      memoalt,
      dt_fim,
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


export default ProjetosViewRepository;

