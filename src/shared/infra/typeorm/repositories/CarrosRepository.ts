import { add } from 'date-fns';
import { Repository, EntityRepository,getRepository} from 'typeorm';

import Carros from '../entities/Carros';


interface ICreateCarros{

  id_uuid: string;
  placa:string;
  carro:string;
  ano: number;
  cor:string;
  km:string;
  ativo: number;
  garagem:string;
  id:number;
}

interface ICarrosRepository {
  findById(id_uuid: string): Promise<Carros | undefined>;
  create(data: ICreateCarros): Promise<Carros>;
  save(carros: Carros): Promise<Carros>;
  remove(carros: Carros): Promise<Carros>;
  findAll(): Promise <Carros[]>

}

 
  @EntityRepository(Carros)
  
   class CarrosRepository implements ICarrosRepository {
  
      private ormRepository: Repository<Carros>;
      
        public async findById(id_uuid: string): Promise<Carros | undefined> {
          this.ormRepository = getRepository(Carros);
          const result = await this.ormRepository.findOne({id_uuid});
          return result;
      }
      public async create({
        id_uuid,placa, carro,ano,cor, km,ativo,garagem,id
    }: ICreateCarros): Promise<Carros> {
        this.ormRepository = getRepository(Carros);
  
        const result = this.ormRepository.create({
          id_uuid,placa, carro,ano,cor, km,ativo,garagem,id
        });
  
        await this.ormRepository.save(result);
  
        return result;
    }
  
    public async save(carros: Carros): Promise<Carros> {
        this.ormRepository = getRepository(Carros);
        return this.ormRepository.save(carros);
    }
  
    public async remove(carros: Carros): Promise<Carros> {
        this.ormRepository = getRepository(Carros);
        return this.ormRepository.remove(carros);
    }
  
    public async findAll():Promise<Carros[]>{
      this.ormRepository = getRepository(Carros);
      return this.ormRepository.find();
    }
  }
  

  export default CarrosRepository;

