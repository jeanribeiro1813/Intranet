import { add } from 'date-fns';
import { Repository, EntityRepository ,getRepository} from 'typeorm';

import Cargo from '../entities/Cargo';

interface ICreateCargo{
    uuidcargo: string;
    cargo:string;
    cod_cargo:number;
  }
  
  interface IBancoRepository {
    findById(uuidcargo: string): Promise<Cargo | undefined>;
    create(data: ICreateCargo): Promise<Cargo>;
    save(cargo: Cargo): Promise<Cargo>;
    remove(cargo: Cargo): Promise<Cargo>;
    findAll(): Promise <Cargo[]>
  
  }
  
   
    @EntityRepository(Cargo)
    
     class CargoRepository implements IBancoRepository {
    
        private ormRepository: Repository<Cargo>;
        
          public async findById(uuidatividade: string): Promise<Cargo | undefined> {
            this.ormRepository = getRepository(Cargo);
            const result = await this.ormRepository.findOne(uuidatividade);
            return result;
        }
        public async create({
            uuidcargo,
            cargo,
            cod_cargo,
      }: ICreateCargo): Promise<Cargo> {
          this.ormRepository = getRepository(Cargo);
    
          const result = this.ormRepository.create({
            uuidcargo,
            cargo,
            cod_cargo,
          });
    
          await this.ormRepository.save(result);
    
          return result;
      }
    
      public async save(cargo: Cargo): Promise<Cargo> {
          this.ormRepository = getRepository(Cargo);
          return this.ormRepository.save(cargo);
      }
    
      public async remove(cargo: Cargo): Promise<Cargo> {
          this.ormRepository = getRepository(Cargo);
          return this.ormRepository.remove(cargo);
      }
    
      public async findAll():Promise<Cargo[]>{
        this.ormRepository = getRepository(Cargo);
        return this.ormRepository.find();
      }
    }
    
  
    export default CargoRepository;
  
  