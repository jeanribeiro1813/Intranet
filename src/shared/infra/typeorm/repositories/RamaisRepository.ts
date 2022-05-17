import { Repository, EntityRepository,getRepository } from 'typeorm';

import Entities from '../entities/Ramais';

interface ICreate{

  uuidramal: string;
  ramal: number;
  cod_atv: string;


}

interface IRepository {
findById(uuid: string): Promise<Entities | undefined>;
create(data: ICreate): Promise<Entities>;
save(obj: Entities): Promise<Entities>;
remove(obj: Entities): Promise<Entities>;
findAll(): Promise <Entities[]>

}


@EntityRepository(Entities)

class RamaisRepository implements IRepository {

  private ormRepository: Repository<Entities>;
  
    public async findById(uuidramal: string): Promise<Entities | undefined> {
      this.ormRepository = getRepository(Entities);
      const result = await this.ormRepository.findOne({uuidramal});
      return result;
  }
  public async create({
    
    uuidramal,
    ramal,
    cod_atv
  
}: ICreate): Promise<Entities> {
    this.ormRepository = getRepository(Entities);

    const result = this.ormRepository.create({
      uuidramal,
    ramal,
    cod_atv
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


export default RamaisRepository;

