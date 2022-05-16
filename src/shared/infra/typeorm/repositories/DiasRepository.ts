import { Repository, EntityRepository,getRepository } from 'typeorm';
import Dias from '../entities/Dias';


interface IDiasCreate{

  uuiddiasuteis: string;
  ano: string;
  mes:string ;
  codigo:string ;
  dias:string ; 

}

interface IDepartamentoRepository {
  findById(cod_chamado_uuid: string): Promise<Dias | undefined>;
  create(data: IDiasCreate): Promise<Dias>;
  save(dias: Dias): Promise<Dias>;
  remove(dias: Dias): Promise<Dias>;
  findAll(): Promise <Dias[]>

}


@EntityRepository(Dias)
  
   class DepartamentoRepository implements IDepartamentoRepository {
  
      private ormRepository: Repository<Dias>;
      
        public async findById(uuiddiasuteis: string): Promise<Dias | undefined> {
          this.ormRepository = getRepository(Dias);
          const result = await this.ormRepository.findOne(uuiddiasuteis);
          return result;
      }
      public async create({
        uuiddiasuteis,
        ano,
        mes,
        codigo,
        dias,  
    }: IDiasCreate): Promise<Dias> {
        this.ormRepository = getRepository(Dias);
  
        const result = this.ormRepository.create({
          uuiddiasuteis,
          ano,
          mes,
          codigo,
          dias,       
        });
  
        await this.ormRepository.save(result);
  
        return result;
    }
  
    public async save(dias: Dias): Promise<Dias> {
        this.ormRepository = getRepository(Dias);
        return this.ormRepository.save(dias);
    }
  
    public async remove(dias: Dias): Promise<Dias> {
        this.ormRepository = getRepository(Dias);
        return this.ormRepository.remove(dias );
    }
  
    public async findAll():Promise<Dias[]>{
      this.ormRepository = getRepository(Dias);
      return this.ormRepository.find();
    }
  }
  

  export default DepartamentoRepository;
