import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../shared/errors/AppErrors';
import Adv from '../../typeorm/entities/Adv';
import AdvRepository from '../../typeorm/repositories/AdvRepository'



interface IRequestDTO {

  codadv: string;
  cod_page:number;
  desc_adv: string;
  cod_adv: string;

  }

  class UpdateClientService {

    public async update({codadv,cod_page,desc_adv,cod_adv}: IRequestDTO): Promise<Adv | Error> {

      const usersRepository = getCustomRepository(AdvRepository);

      const client = await usersRepository.findOne(codadv);

      if (!client) {
        throw new AppError ('client não existe',404);
      }


      client.cod_page = cod_page ? cod_page : client.cod_page;
      client.desc_adv = desc_adv ? desc_adv : client.desc_adv;
  

      await usersRepository.save(client);

      return client;
    }
  }

  export default UpdateClientService;
