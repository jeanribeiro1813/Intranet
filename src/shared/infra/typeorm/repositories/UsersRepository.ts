import { EntityRepository, Repository ,getRepository} from "typeorm";
import Entities from "../entities/Users";

interface ICreate{

    uuidusuario: string;
    login:string ;
    senha:string ;
    usuario:string ;
    n_cnh:number ;
    dt_validade:string ;
    email:string ;
    ramal:number ;
    status:string ;
    h_status:string ;
    last_log:string ;
    log_time:string ;
    dt_nasc:string ;
    contato:string ;
    contato2:string ;
    uuidcargo:string ;
    uuiddeparta:string ; 
    alarm_id:number ;
    cod_usuario:number ;
    avatar:string ;
    cpf_cnpj: string;
    enquadramento: string;
    carga_horaria: number;  
    proventos: number;
    vt: number;
    banco: number;
    seguro: number;
    cv_medico: number;
    tp_va_vr: string;  
    va_vr: number;


}

interface IRepository {
findById(uuid: string): Promise<Entities | undefined>;
findByLogin(login: string): Promise<Entities | undefined>;
findByEmail(email: string): Promise<Entities | undefined>;
create(data: ICreate): Promise<Entities>;
save(obj: Entities): Promise<Entities>;
remove(obj: Entities): Promise<Entities>;
findAll(): Promise <Entities[]>

}


@EntityRepository(Entities)

class UsersRepository implements IRepository {

  private ormRepository: Repository<Entities>;
  
    public async findById(uuid: string): Promise<Entities | undefined> {
      this.ormRepository = getRepository(Entities);
      const result = await this.ormRepository.findOne({where:{uuid}});
      return result;
  }

  public async findByEmail(email: string): Promise<Entities | undefined> {
    this.ormRepository = getRepository(Entities);
    const result = await this.ormRepository.findOne({where:{email}});
    return result;
}

public async findByLogin(login: string): Promise<Entities | undefined> {
  this.ormRepository = getRepository(Entities);
  const result = await this.ormRepository.findOne({where:{login}});
  return result;
}
  public async create({
    
    uuidusuario,
    login,
    senha,
    usuario,
    n_cnh,
    dt_validade,
    email,
    ramal,
    status,
    h_status,
    last_log,
    log_time,
    dt_nasc,
    contato,
    contato2,
    uuidcargo,
    uuiddeparta, 
    alarm_id,
    cod_usuario,
    avatar,
    cpf_cnpj,
    enquadramento,
    carga_horaria,  
    proventos,
    vt,
    banco,
    seguro,
    cv_medico,
    tp_va_vr,  
    va_vr,
  
}: ICreate): Promise<Entities> {
    this.ormRepository = getRepository(Entities);

    const result = this.ormRepository.create({
        uuidusuario,
        login,
        senha,
        usuario,
        n_cnh,
        dt_validade,
        email,
        ramal,
        status,
        h_status,
        last_log,
        log_time,
        dt_nasc,
        contato,
        contato2,
        uuidcargo,
        uuiddeparta, 
        alarm_id,
        cod_usuario,
        avatar,
        cpf_cnpj,
        enquadramento,
        carga_horaria,  
        proventos,
        vt,
        banco,
        seguro,
        cv_medico,
        tp_va_vr,  
        va_vr,
    
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


export default UsersRepository;

