import { Repository, EntityRepository, getRepository } from 'typeorm';
import Atividades from '../entities/Atividades';


interface ICreateAtividade{
  uuidatividade: string;
  atividade:string ;
  cod_atv:string ;
}


interface IAdvRepository {
  findById(uuidatividade: string): Promise<Atividades | undefined>;
  create(data: ICreateAtividade): Promise<Atividades>;
  save(atividade: Atividades): Promise<Atividades>;
  remove(atividade: Atividades): Promise<Atividades>;
  findAll(): Promise <Atividades[]>

}


@EntityRepository(Atividades)

 class AtividadesRepository implements IAdvRepository {

    private ormRepository: Repository<Atividades>;
    
      public async findById(uuidatividade: string): Promise<Atividades | undefined> {
        this.ormRepository = getRepository(Atividades);
        const result = await this.ormRepository.findOne(uuidatividade);
        return result;
    }
    public async create({
      uuidatividade,
      atividade,
      cod_atv ,
  }: ICreateAtividade): Promise<Atividades> {
      this.ormRepository = getRepository(Atividades);

      const result = this.ormRepository.create({
        uuidatividade,
      atividade,
      cod_atv ,
      });

      await this.ormRepository.save(result);

      return result;
  }

  public async save(atividade: Atividades): Promise<Atividades> {
      this.ormRepository = getRepository(Atividades);
      return this.ormRepository.save(atividade);
  }

  public async remove(atividade: Atividades): Promise<Atividades> {
      this.ormRepository = getRepository(Atividades);
      return this.ormRepository.remove(atividade);
  }

  public async findAll():Promise<Atividades[]>{
    this.ormRepository = getRepository(Atividades);
    return this.ormRepository.find();
  }
}

export default AtividadesRepository;

