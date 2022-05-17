import { add } from 'date-fns';
import { Repository, EntityRepository,getRepository } from 'typeorm';

import Entities from '../entities/Manutencoes';


interface ICreate{

  cod_manutencao_uuid: string;
  descricao: string;
  valor:string ;
  cod_manutencao:number;


}

interface IRepository {
findById(cod_manutencao_uuid: string): Promise<Entities | undefined>;
create(data: ICreate): Promise<Entities>;
save(obj: Entities): Promise<Entities>;
remove(obj: Entities): Promise<Entities>;
findAll(): Promise <Entities[]>

}


@EntityRepository(Entities)

 class ManutencoesRepository implements IRepository {

    private ormRepository: Repository<Entities>;
    
      public async findById(cod_manutencao_uuid: string): Promise<Entities | undefined> {
        this.ormRepository = getRepository(Entities);
        const result = await this.ormRepository.findOne({cod_manutencao_uuid});
        return result;
    }
    public async create({
      cod_manutencao_uuid,
      descricao,
      valor,
      cod_manutencao
  }: ICreate): Promise<Entities> {
      this.ormRepository = getRepository(Entities);

      const result = this.ormRepository.create({
        cod_manutencao_uuid,
        descricao,
        valor,
        cod_manutencao
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


export default ManutencoesRepository;

