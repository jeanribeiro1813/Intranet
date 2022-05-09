import { getCustomRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Adv from '../../../../shared/infra/typeorm/entities/Adv';
import AdvRepository from '../../../../shared/infra/typeorm/repositories/AdvRepository'




interface IRequestDTO {
  codadv: string;
  cod_page:number;
  desc_adv: string;
  cod_adv: string;


  }

  class CreateClientesService {

    public async create({ codadv,cod_page,desc_adv,cod_adv}: IRequestDTO): Promise<Adv | Error> {

      const clientesRepository = getCustomRepository(AdvRepository);

      const checkUserExists = await clientesRepository.findById(codadv);

      if (checkUserExists) {
        throw new AppError('Nome já existe.',404);

      }

      const cliet =  clientesRepository.create({

        cod_page,desc_adv,cod_adv

      });

      await clientesRepository.save(cliet);

      return cliet;
    }
  }

  export default CreateClientesService;
