import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Adv from '../../../typeorm/entities/Adv';
import AdvRepository from '../../../typeorm/repositories/AdvRepository'



interface IRequestDTO {

  codadv: string;
  cod_page:number;
  desc_adv: string;
  cod_adv: string;

  }

  class UpdateClientService {

    public async update({codadv,cod_page,desc_adv,cod_adv}: IRequestDTO): Promise<Adv | Error> {

      const Repository = getCustomRepository(AdvRepository);

      const result = await Repository.findOne(codadv);

      if (!result) {
        throw new AppError ('client não existe',404);
      }


      result.cod_page = cod_page ? cod_page : result.cod_page;
      result.desc_adv = desc_adv ? desc_adv : result.desc_adv;
  

      await Repository.save(result);

      return result;
    }
  }

  export default UpdateClientService;
