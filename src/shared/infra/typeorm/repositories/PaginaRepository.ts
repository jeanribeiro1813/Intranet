import { add } from 'date-fns';
import { Repository, EntityRepository,getRepository } from 'typeorm';

import Entities from '../entities/Paginas';

interface ICreate{

  cod_page_uuid: string;
  pagina: string;
  descricao:string ;
  banner:number ;
  cod_page:number;

}

interface IRepository {
findById(uuid: string): Promise<Entities | undefined>;
create(data: ICreate): Promise<Entities>;
save(obj: Entities): Promise<Entities>;
remove(obj: Entities): Promise<Entities>;
findAll(): Promise <Entities[]>

}


@EntityRepository(Entities)

class PaginaRepository implements IRepository {

  private ormRepository: Repository<Entities>;
  
    public async findById(uuid: string): Promise<Entities | undefined> {
      this.ormRepository = getRepository(Entities);
      const result = await this.ormRepository.findOne(uuid);
      return result;
  }
  public async create({
    
    cod_page_uuid,
    pagina,
    descricao,
    banner,
    cod_page,
}: ICreate): Promise<Entities> {
    this.ormRepository = getRepository(Entities);

    const result = this.ormRepository.create({
      cod_page_uuid,
      pagina,
      descricao,
      banner,
      cod_page,
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


export default PaginaRepository;

