import { Repository, EntityRepository,getRepository } from 'typeorm';
import Clientes from '../entities/Clientes';


interface IClientesClientes{
    uuidcliente: string;
    projeto:string;
    cliente: string;

  }
  
  interface IClientesRepository {
    findById(uuidcliente: string): Promise<Clientes | undefined>;
    create(data: IClientesClientes): Promise<Clientes>;
    save(clientes: Clientes): Promise<Clientes>;
    remove(clientes: Clientes): Promise<Clientes>;
    findAll(): Promise <Clientes[]>
  
  }
  
   
    @EntityRepository(Clientes)
    
     class CarrosRepository implements IClientesRepository {
    
        private ormRepository: Repository<Clientes>;
        
          public async findById(uuidcliente: string): Promise<Clientes | undefined> {
            this.ormRepository = getRepository(Clientes);
            const result = await this.ormRepository.findOne({uuidcliente});
            return result;
        }
        public async create({
            uuidcliente,
            projeto,
            cliente,
      }: IClientesClientes): Promise<Clientes> {
          this.ormRepository = getRepository(Clientes);
    
          const result = this.ormRepository.create({
             uuidcliente,
            projeto,
            cliente,
          });
    
          await this.ormRepository.save(result);
    
          return result;
      }
    
      public async save(clientes: Clientes): Promise<Clientes> {
          this.ormRepository = getRepository(Clientes);
          return this.ormRepository.save(clientes);
      }
    
      public async remove(clientes: Clientes): Promise<Clientes> {
          this.ormRepository = getRepository(Clientes);
          return this.ormRepository.remove(clientes );
      }
    
      public async findAll():Promise<Clientes[]>{
        this.ormRepository = getRepository(Clientes);
        return this.ormRepository.find();
      }
    }
    
  
    export default CarrosRepository;
  