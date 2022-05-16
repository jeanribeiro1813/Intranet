import { add } from 'date-fns';
import { Repository, EntityRepository, getRepository } from 'typeorm';

import Adv from '../entities/Adv';


interface ICreateADV{


  cod_page: number;
  desc_adv:string ;
  cod_adv:string;

}

interface IAdvRepository {
  findById(codadv: string): Promise<Adv | undefined>;
  create(data: ICreateADV): Promise<Adv>;
  save(adv: Adv): Promise<Adv>;
  remove(adv: Adv): Promise<Adv>;
  findAll(): Promise <Adv[]>

}


@EntityRepository(Adv)
 class AdvRepository implements IAdvRepository {

    private ormRepository: Repository<Adv>;
    
      public async findById(codadv: string): Promise<Adv | undefined> {
        this.ormRepository = getRepository(Adv);
        const result = await this.ormRepository.findOne(codadv);
        return result;
    }
    public async create({
      cod_page,
      desc_adv,
      cod_adv
  }: ICreateADV): Promise<Adv> {
      this.ormRepository = getRepository(Adv);

      const result = this.ormRepository.create({
        cod_page,
        desc_adv,
        cod_adv
      });

      await this.ormRepository.save(result);

      return result;
  }

  public async save(adv: Adv): Promise<Adv> {
      this.ormRepository = getRepository(Adv);
      return this.ormRepository.save(adv);
  }

  public async remove(adv: Adv): Promise<Adv> {
      this.ormRepository = getRepository(Adv);
      return this.ormRepository.remove(adv);
  }

  public async findAll():Promise<Adv[]>{
    this.ormRepository = getRepository(Adv);
    return this.ormRepository.find();
  }
}




export default AdvRepository;