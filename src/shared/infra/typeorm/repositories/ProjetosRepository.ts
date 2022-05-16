import { Repository, EntityRepository,getRepository } from 'typeorm';

import Entities from '../entities/Projetos';

interface ICreate{

  uuidprojeto: string;
  data:string ;
  nprojeto: string;
  contrato:string ;
  projeto:string ;
  cliente:string ;
  cliente2:string;
  numero:string ;
  gerente:string ;
  coordenador:string ;
  equipe:string ;
  status:string ;
  proposta:string ;
  departamento:string ;
  previsao:string ;
  nproc_origem:string ;
  valor:string ;
  memoalt:string ;
  dt_fim:string ;
  cod_proj:number

}

interface IRepository {
findById(uuid: string): Promise<Entities | undefined>;
create(data: ICreate): Promise<Entities>;
save(obj: Entities): Promise<Entities>;
remove(obj: Entities): Promise<Entities>;
findAll(): Promise <Entities[]>

}


@EntityRepository(Entities)

class ProjetosRepository implements IRepository {

  private ormRepository: Repository<Entities>;
  
    public async findById(uuid: string): Promise<Entities | undefined> {
      this.ormRepository = getRepository(Entities);
      const result = await this.ormRepository.findOne(uuid);
      return result;
  }
  public async create({
    
    uuidprojeto,
  data,
  nprojeto,
  contrato,
  projeto,
  cliente,
  cliente2,
  numero,
  gerente,
  coordenador,
  equipe,
  status,
  proposta,
  departamento,
  previsao,
  nproc_origem,
  valor,
  memoalt,
  dt_fim,
  cod_proj,
}: ICreate): Promise<Entities> {
    this.ormRepository = getRepository(Entities);

    const result = this.ormRepository.create({
      uuidprojeto,
      data,
      nprojeto,
      contrato,
      projeto,
      cliente,
      cliente2,
      numero,
      gerente,
      coordenador,
      equipe,
      status,
      proposta,
      departamento,
      previsao,
      nproc_origem,
      valor,
      memoalt,
      dt_fim,
      cod_proj,
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


export default ProjetosRepository;

