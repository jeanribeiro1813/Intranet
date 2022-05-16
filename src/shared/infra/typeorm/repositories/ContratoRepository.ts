import { add } from 'date-fns';
import { Repository, EntityRepository,getRepository } from 'typeorm';

import Contrato from '../entities/Contrato';

interface IClientesClientes{

  uuidcontrato: string;
  contrato: string;

}

interface IContratosRepository {
  findById(cod_chamado_uuid: string): Promise<Contrato | undefined>;
  create(data: IClientesClientes): Promise<Contrato>;
  save(contrato: Contrato): Promise<Contrato>;
  remove(contrato: Contrato): Promise<Contrato>;
  findAll(): Promise <Contrato[]>

}

 
  @EntityRepository(Contrato)
  
   class ContratoRepository implements IContratosRepository {
  
      private ormRepository: Repository<Contrato>;
      
        public async findById(uuidcontrato: string): Promise<Contrato | undefined> {
          this.ormRepository = getRepository(Contrato);
          const result = await this.ormRepository.findOne(uuidcontrato);
          return result;
      }
      public async create({
        uuidcontrato,
        contrato
      
    }: IClientesClientes): Promise<Contrato> {
        this.ormRepository = getRepository(Contrato);
  
        const result = this.ormRepository.create({
          uuidcontrato,
          contrato
        });
  
        await this.ormRepository.save(result);
  
        return result;
    }
  
    public async save(contrato: Contrato): Promise<Contrato> {
        this.ormRepository = getRepository(Contrato);
        return this.ormRepository.save(contrato);
    }
  
    public async remove(contrato: Contrato): Promise<Contrato> {
        this.ormRepository = getRepository(Contrato);
        return this.ormRepository.remove(contrato );
    }
  
    public async findAll():Promise<Contrato[]>{
      this.ormRepository = getRepository(Contrato);
      return this.ormRepository.find();
    }
  }
  

  export default ContratoRepository;
