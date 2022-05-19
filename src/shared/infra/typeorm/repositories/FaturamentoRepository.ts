import { add } from 'date-fns';
import { Repository, EntityRepository,getRepository } from 'typeorm';

import Faturamento from '../entities/Faturamento';

interface ICreateFaturamento{

  uuidfat: string;
  uuidusuario: string
  uuidprojeto: string
  uuidatividade:string ;
  data:string ;
  inicio:string ;
  fim:string ;
  sttpguuid:string;
  obs:string;
  empresa:string;
}

interface IFaturamentoRepository {
  findById(uuidfat: string): Promise<Faturamento | undefined>;
  create(data: ICreateFaturamento): Promise<Faturamento>;
  save(fatu: Faturamento): Promise<Faturamento>;
  remove(fatu: Faturamento): Promise<Faturamento>;
  findAll(): Promise <Faturamento[]>

}

 
  @EntityRepository(Faturamento)
  
   class FaturamentoRepository implements IFaturamentoRepository {
  
      private ormRepository: Repository<Faturamento>;
      
        public async findById(uuidfat: string): Promise<Faturamento | undefined> {
          this.ormRepository = getRepository(Faturamento);
          const result = await this.ormRepository.findOne({where:{uuidfat}});
          return result;
      }
      public async create({
        uuidfat,
        uuidusuario,
        uuidprojeto,
        uuidatividade,
        data,
        inicio,
        fim,
        sttpguuid,
        obs,
        empresa,
    }: ICreateFaturamento): Promise<Faturamento> {
        this.ormRepository = getRepository(Faturamento);
  
        const result = this.ormRepository.create({
          uuidfat,
          uuidusuario,
          uuidprojeto,
          uuidatividade,
          data,
          inicio,
          fim,
          sttpguuid,
          obs,
          empresa,
        });
  
        await this.ormRepository.save(result);
  
        return result;
    }
  
    public async save(fatu: Faturamento): Promise<Faturamento> {
        this.ormRepository = getRepository(Faturamento);
        return this.ormRepository.save(fatu);
    }
  
    public async remove(fatu: Faturamento): Promise<Faturamento> {
        this.ormRepository = getRepository(Faturamento);
        return this.ormRepository.remove(fatu);
    }
  
    public async findAll():Promise<Faturamento[]>{
      this.ormRepository = getRepository(Faturamento);
      return this.ormRepository.find();
    }
  }
  

  export default FaturamentoRepository;
