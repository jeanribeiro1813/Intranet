import { Repository, EntityRepository, getRepository } from 'typeorm';
import Chamados from '../entities/Chamados';



interface ICreateChamados{

    cod_chamado_uuid: string;
    cod_usuario:number;
    equipamento: string;
    descricao:string;
    prioridade: string;
    dt_solicitacao:string;
    dt_conclusao: string;
    desc_conclusao:string;
    cod_chamado: number;
  }
  
  interface IChamadosRepository {
    findById(cod_chamado_uuid: string): Promise<Chamados | undefined>;
    create(data: ICreateChamados): Promise<Chamados>;
    save(chamados: Chamados): Promise<Chamados>;
    remove(chamados: Chamados): Promise<Chamados>;
    findAll(): Promise <Chamados[]>
  
  }
  
   
    @EntityRepository(Chamados)
    
     class ChamadosRepository implements IChamadosRepository {
    
        private ormRepository: Repository<Chamados>;
        
          public async findById(cod_chamado_uuid: string): Promise<Chamados | undefined> {
            this.ormRepository = getRepository(Chamados);
            const result = await this.ormRepository.findOne(cod_chamado_uuid);
            return result;
        }
        public async create({
            cod_chamado_uuid,
            cod_usuario,
            equipamento,
            descricao,
            prioridade,
            dt_solicitacao,
            dt_conclusao,
            desc_conclusao,
            cod_chamado,
      }: ICreateChamados): Promise<Chamados> {
          this.ormRepository = getRepository(Chamados);
    
          const result = this.ormRepository.create({
            cod_chamado_uuid,
            cod_usuario,
            equipamento,
            descricao,
            prioridade,
            dt_solicitacao,
            dt_conclusao,
            desc_conclusao,
            cod_chamado,
          });
    
          await this.ormRepository.save(result);
    
          return result;
      }
    
      public async save(chamados: Chamados): Promise<Chamados> {
          this.ormRepository = getRepository(Chamados);
          return this.ormRepository.save(chamados);
      }
    
      public async remove(chamados: Chamados): Promise<Chamados> {
          this.ormRepository = getRepository(Chamados);
          return this.ormRepository.remove(chamados );
      }
    
      public async findAll():Promise<Chamados[]>{
        this.ormRepository = getRepository(Chamados);
        return this.ormRepository.find();
      }
    }
    
  
    export default ChamadosRepository;
  