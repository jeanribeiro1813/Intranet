import { Repository, EntityRepository,getRepository } from 'typeorm';

import Entities from '../entities/UsersView';

interface ICreate{

    uuidusuario: string;
    departamento:string ;
    cargo:string ;
    usuario:string ;
    email:string ;
    ramal:number ;
    contato:string ;
    contato2:string ;
    status:string ;
    h_status:string ;
    dt_nasc:string ;
    enquadramento:string ;


}

interface IRepository {
findById(uuid: string): Promise<Entities | undefined>;
create(data: ICreate): Promise<Entities>;
save(obj: Entities): Promise<Entities>;
remove(obj: Entities): Promise<Entities>;
findAll(): Promise <Entities[]>

}


@EntityRepository(Entities)

class UsersViewsRepository implements IRepository {

private ormRepository: Repository<Entities>;

  public async findById(uuidusuario: string): Promise<Entities | undefined> {
    this.ormRepository = getRepository(Entities);
    const result = await this.ormRepository.findOne({uuidusuario});
    return result;
}
public async create({
  
  uuidusuario,
  departamento,
  cargo,
  usuario,
  email,
  ramal,
  contato,
  contato2,
  status,
  h_status,
  dt_nasc,
  enquadramento,

}: ICreate): Promise<Entities> {
  this.ormRepository = getRepository(Entities);

  const result = this.ormRepository.create({
    uuidusuario,
    departamento,
    cargo,
    usuario,
    email,
    ramal,
    contato,
    contato2,
    status,
    h_status,
    dt_nasc,
    enquadramento,
  
  });

  await this.ormRepository.save(result);

  return result;
}

public async save(obj: Entities): Promise<Entities> {
  this.ormRepository = getRepository(Entities);
  return this.ormRepository.save(obj);
}

public async remove(obj: Entities): Promise<Entities> {
  this.ormRepository = getRepository(Entities);
  return this.ormRepository.remove(obj);
}

public async findAll():Promise<Entities[]>{
this.ormRepository = getRepository(Entities);
return this.ormRepository.find();
}
}


export default UsersViewsRepository;

