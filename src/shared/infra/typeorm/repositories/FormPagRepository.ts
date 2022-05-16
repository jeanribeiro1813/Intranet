import { Repository, EntityRepository,getRepository } from 'typeorm';

import Entitie from '../entities/FormPag';

interface ICreateFormPag{

 
  uuidformpag: string,
  codigo: string,
  descricao:string,
}

interface IFormPagVRepository {
findById(uuidfat: string): Promise<Entitie | undefined>;
create(data: ICreateFormPag): Promise<Entitie>;
save(form: Entitie): Promise<Entitie>;
remove(form: Entitie): Promise<Entitie>;
findAll(): Promise <Entitie[]>

}


@EntityRepository(Entitie)

 class FormPagVRepository implements IFormPagVRepository {

    private ormRepository: Repository<Entitie>;
    
      public async findById(id_uuid: string): Promise<Entitie | undefined> {
        this.ormRepository = getRepository(Entitie);
        const result = await this.ormRepository.findOne(id_uuid);
        return result;
    }
    public async create({
      uuidformpag,
      codigo,
      descricao

  }: ICreateFormPag): Promise<Entitie> {
      this.ormRepository = getRepository(Entitie);

      const result = this.ormRepository.create({
        uuidformpag,
        codigo,
        descricao
      });

      await this.ormRepository.save(result);

      return result;
  }

  public async save(form: Entitie): Promise<Entitie> {
      this.ormRepository = getRepository(Entitie);
      return this.ormRepository.save(form);
  }

  public async remove(form: Entitie): Promise<Entitie> {
      this.ormRepository = getRepository(Entitie);
      return this.ormRepository.remove(form);
  }

  public async findAll():Promise<Entitie[]>{
    this.ormRepository = getRepository(Entitie);
    return this.ormRepository.find();
  }
}


export default FormPagVRepository;
