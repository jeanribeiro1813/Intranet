import { Repository, EntityRepository,getRepository } from 'typeorm';

import Entities from '../entities/Reserva';

interface ICreate{

    cod_reserva_uuid: string;
    placa: string;
    usuario:string ;
    dt_saida: string;
    dt_chegada:string ;
    hora_saida: string;
    hora_chegada:string ;
    km_saida: string;
    km_chegada:string ;
    projeto: string;
    cancelado:number ;
    desc_cancel: string;
    dt_cancel:string ;
    dev_obs: string;
    cod_reserva:number;


}

interface IRepository {
findById(uuid: string): Promise<Entities | undefined>;
create(data: ICreate): Promise<Entities>;
save(obj: Entities): Promise<Entities>;
remove(obj: Entities): Promise<Entities>;
findAll(): Promise <Entities[]>

}


@EntityRepository(Entities)

class ReservaRepository implements IRepository {

  private ormRepository: Repository<Entities>;
  
    public async findById(uuid: string): Promise<Entities | undefined> {
      this.ormRepository = getRepository(Entities);
      const result = await this.ormRepository.findOne(uuid);
      return result;
  }
  public async create({
    
    cod_reserva_uuid,
    placa,
    usuario,
    dt_saida,
    dt_chegada,
    hora_saida,
    hora_chegada,
    km_saida,
    km_chegada,
    projeto,
    cancelado,
    desc_cancel,
    dt_cancel,
    dev_obs,
    cod_reserva,
  
}: ICreate): Promise<Entities> {
    this.ormRepository = getRepository(Entities);

    const result = this.ormRepository.create({
      cod_reserva_uuid,
      placa,
      usuario,
      dt_saida,
      dt_chegada,
      hora_saida,
      hora_chegada,
      km_saida,
      km_chegada,
      projeto,
      cancelado,
      desc_cancel,
      dt_cancel,
      dev_obs,
      cod_reserva,
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


export default ReservaRepository;

