import { add } from 'date-fns';
import { Repository, EntityRepository,getRepository } from 'typeorm';

import Departamento from '../entities/Departamento';

interface IDiasClientes{

  uuiddeparta: string;
  departamento:string ;

}

interface IDepartamentoRepository {
  findById(uuiddeparta: string): Promise<Departamento | undefined>;
  create(data: IDiasClientes): Promise<Departamento>;
  save(departamento: Departamento): Promise<Departamento>;
  remove(departamento: Departamento): Promise<Departamento>;
  findAll(): Promise <Departamento[]>

}

 
  @EntityRepository(Departamento)
  
   class DepartamentoRepository implements IDepartamentoRepository {
  
      private ormRepository: Repository<Departamento>;
      
        public async findById(uuiddeparta: string): Promise<Departamento | undefined> {
          this.ormRepository = getRepository(Departamento);
          const result = await this.ormRepository.findOne({uuiddeparta});
          return result;
      }
      public async create({
        uuiddeparta,
       departamento      
    }: IDiasClientes): Promise<Departamento> {
        this.ormRepository = getRepository(Departamento);
  
        const result = this.ormRepository.create({
          uuiddeparta,
          departamento      
        });
  
        await this.ormRepository.save(result);
  
        return result;
    }
  
    public async save(departamento: Departamento): Promise<Departamento> {
        this.ormRepository = getRepository(Departamento);
        return this.ormRepository.save(departamento);
    }
  
    public async remove(departamento: Departamento): Promise<Departamento> {
        this.ormRepository = getRepository(Departamento);
        return this.ormRepository.remove(departamento );
    }
  
    public async findAll():Promise<Departamento[]>{
      this.ormRepository = getRepository(Departamento);
      return this.ormRepository.find();
    }
  }
  

  export default DepartamentoRepository;

