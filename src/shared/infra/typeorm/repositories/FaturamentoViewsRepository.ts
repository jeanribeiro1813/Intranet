import { Repository, EntityRepository ,getRepository} from 'typeorm';
import FaturamentoView from '../entities/FaturamentoView';


interface ICreateFaturamento{

    uuidfat: string,
    empresa: string,
    uuidusuario: string,
    usuario: string,
    departamento: string,
    uuidprojeto: string,
    nprojeto: string,
    projeto: string,
    uuidcontrato:string ,
    contrato:string ,
    uuidcliente:string ,
    cliente:string ,
    uuidatividade:string ,
    atividade:string,
    data:string,
    inicio:string,
    fim:string,
    status:string,
    obs:string,
}

interface IFaturamentoViewRepository {
  findById(uuidfat: string): Promise<FaturamentoView | undefined>;
  create(data: ICreateFaturamento): Promise<FaturamentoView>;
  save(fatu: FaturamentoView): Promise<FaturamentoView>;
  remove(fatu: FaturamentoView): Promise<FaturamentoView>;
  findAll(): Promise <FaturamentoView[]>

}

 
  @EntityRepository(FaturamentoView)
  
   class FaturamentoViewRepository implements IFaturamentoViewRepository {
  
      private ormRepository: Repository<FaturamentoView>;
      
        public async findById(id_uuid: string): Promise<FaturamentoView | undefined> {
          this.ormRepository = getRepository(FaturamentoView);
          const result = await this.ormRepository.findOne(id_uuid);
          return result;
      }
      public async create({
        uuidfat,
        empresa,
        uuidusuario,
        usuario,
        departamento,
        uuidprojeto,
        nprojeto,
        projeto,
        uuidcontrato,
        contrato,
        uuidcliente ,
        cliente ,
        uuidatividade ,
        atividade,
        data,
        inicio,
        fim,
        status,
        obs,
    }: ICreateFaturamento): Promise<FaturamentoView> {
        this.ormRepository = getRepository(FaturamentoView);
  
        const result = this.ormRepository.create({
          uuidfat,
          empresa,
          uuidusuario,
          usuario,
          departamento,
          uuidprojeto,
          nprojeto,
          projeto,
          uuidcontrato,
          contrato,
          uuidcliente ,
          cliente ,
          uuidatividade ,
          atividade,
          data,
          inicio,
          fim,
          status,
          obs,
        });
  
        await this.ormRepository.save(result);
  
        return result;
    }
  
    public async save(fatu: FaturamentoView): Promise<FaturamentoView> {
        this.ormRepository = getRepository(FaturamentoView);
        return this.ormRepository.save(fatu);
    }
  
    public async remove(fatu: FaturamentoView): Promise<FaturamentoView> {
        this.ormRepository = getRepository(FaturamentoView);
        return this.ormRepository.remove(fatu);
    }
  
    public async findAll():Promise<FaturamentoView[]>{
      this.ormRepository = getRepository(FaturamentoView);
      return this.ormRepository.find();
    }
  }
  

  export default FaturamentoViewRepository;
