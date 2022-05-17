import { Repository, EntityRepository,getRepository } from 'typeorm';

import Entities from '../entities/N1';

interface ICreate{

  uuidn1: string;
  codigo: string;
  descricao:string ;



}

interface IRepository {
findById(uuidn1: string): Promise<Entities | undefined>;
create(data: ICreate): Promise<Entities>;
save(obj: Entities): Promise<Entities>;
remove(obj: Entities): Promise<Entities>;
findAll(): Promise <Entities[]>

}


@EntityRepository(Entities)

 class N1Repository implements IRepository {

    private ormRepository: Repository<Entities>;
    
      public async findById(uuidn1: string): Promise<Entities | undefined> {
        this.ormRepository = getRepository(Entities);
        const result = await this.ormRepository.findOne({uuidn1});
        return result;
    }
    public async create({
      uuidn1,
      codigo,
      descricao
  }: ICreate): Promise<Entities> {
      this.ormRepository = getRepository(Entities);

      const result = this.ormRepository.create({
        uuidn1,
        codigo,
        descricao
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


export default N1Repository;

