import Adv from '../../entities/Adv';
import { v4 as uuidv4 } from 'uuid';


interface ICreateADV{

  cod_page: number;
  desc_adv:string ;
  cod_adv:string;

}

interface IAdvRepository {

  findById(codadv: string): Promise<Adv | undefined>;
  create(data: ICreateADV): Promise<Adv>;
  save(adv: Adv): Promise<Adv>;
  // remove(adv: Adv): Promise<Adv | undefined>;
  // findAll(): Promise <Adv[]>

}


class FakeCustomersRepository implements IAdvRepository {

  private advs: Adv[] = [];

  public async create({cod_page,desc_adv,cod_adv }: ICreateADV): Promise<Adv> {

    const adv = new Adv();

    adv.codadv = uuidv4();
    adv.cod_page = cod_page;
    adv.desc_adv = desc_adv;
    adv.cod_adv = cod_adv

    this.advs.push(adv);

    return adv;
  }
  
  public async save(adv: Adv): Promise<Adv> {

    Object.assign(this.advs, adv);

    return adv;
  }

  public async findById(codadv: string): Promise<Adv | undefined> {
    const result = this.advs.find(result => result.codadv === codadv);
    return result;
  }

  // public async remove(adv: Adv): Promise<void> {}

  // public async findAll():Promise<Adv[] | undefined>{
  // return undefined;
  // }

}

export default FakeCustomersRepository;
