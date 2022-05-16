import { Repository, EntityRepository ,getRepository} from 'typeorm';

import Entitie from '../entities/Bancos';

interface ICreateBanco{
  uuidbanco: string;
  codigo:string ;
  descricao:string ;
}

interface IBancoRepository {
  findById(uuidbanco: string): Promise<Entitie | undefined>;
  create(data: ICreateBanco): Promise<Entitie>;
  save(banco: Entitie): Promise<Entitie>;
  remove(banco: Entitie): Promise<Entitie>;
  findAll(): Promise <Entitie[]>

}

 
  @EntityRepository(Entitie)
  
   class BancoRepository implements IBancoRepository {
  
      private ormRepository: Repository<Entitie>;
      
        public async findById(uuidatividade: string): Promise<Entitie | undefined> {
          this.ormRepository = getRepository(Entitie);
          const result = await this.ormRepository.findOne(uuidatividade);
          return result;
      }
      public async create({
        uuidbanco,
        codigo,
        descricao,
    }: ICreateBanco): Promise<Entitie> {
        this.ormRepository = getRepository(Entitie);
  
        const result = this.ormRepository.create({
          uuidbanco,
          codigo,
          descricao,
        });
  
        await this.ormRepository.save(result);
  
        return result;
    }
  
    public async save(banco: Entitie): Promise<Entitie> {
        this.ormRepository = getRepository(Entitie);
        return this.ormRepository.save(banco);
    }
  
    public async remove(banco: Entitie): Promise<Entitie> {
        this.ormRepository = getRepository(Entitie);
        return this.ormRepository.remove(banco);
    }
  
    public async findAll():Promise<Entitie[]>{
      this.ormRepository = getRepository(Entitie);
      return this.ormRepository.find();
    }
  }
  

  export default BancoRepository;

