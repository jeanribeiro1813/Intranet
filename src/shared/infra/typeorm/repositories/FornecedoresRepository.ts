import { Repository, EntityRepository ,getRepository } from 'typeorm';

import Fornecedores from '../entities/Fornecedores';


interface ICreateFornecedores{

  uuidusuario: string,
  usuario:string ,
  tp_doc: string,
  cpf_cnpj:string ,
  email: string,
  contato:string ,
  contato2: string,
  cargo:string ,
  status:string ,
  avatar:string ,

}

interface IFormPagVRepository {
findById(uuidusuario: string): Promise<Fornecedores | undefined>;
create(data: ICreateFornecedores): Promise<Fornecedores>;
save(obj: Fornecedores): Promise<Fornecedores>;
remove(obj: Fornecedores): Promise<Fornecedores>;
findAll(): Promise <Fornecedores[]>

}


@EntityRepository(Fornecedores)

 class FormPagVRepository implements IFormPagVRepository {

    private ormRepository: Repository<Fornecedores>;
    
      public async findById(uuidusuario: string): Promise<Fornecedores | undefined> {
        this.ormRepository = getRepository(Fornecedores);
        const result = await this.ormRepository.findOne({uuidusuario});
        return result;
    }
    public async create({
      uuidusuario,
      usuario,
      tp_doc,
      cpf_cnpj,
      email,
      contato ,
      contato2,
      cargo ,
      status ,
      avatar ,

  }: ICreateFornecedores): Promise<Fornecedores> {
      this.ormRepository = getRepository(Fornecedores);

      const result = this.ormRepository.create({
        uuidusuario,
      usuario,
      tp_doc,
      cpf_cnpj,
      email,
      contato ,
      contato2,
      cargo ,
      status ,
      avatar ,
      });

      await this.ormRepository.save(result);

      return result;
  }

  public async save(obj: Fornecedores): Promise<Fornecedores> {
      this.ormRepository = getRepository(Fornecedores);
      return this.ormRepository.save(obj);
  }

  public async remove(obj: Fornecedores): Promise<Fornecedores> {
      this.ormRepository = getRepository(Fornecedores);
      return this.ormRepository.remove(obj);
  }

  public async findAll():Promise<Fornecedores[]>{
    this.ormRepository = getRepository(Fornecedores);
    return this.ormRepository.find();
  }
}


export default FormPagVRepository;
