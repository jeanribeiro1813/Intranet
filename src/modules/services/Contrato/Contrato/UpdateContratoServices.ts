import { getCustomRepository,getRepository } from 'typeorm'
import AppError from '../../../../shared/errors/AppErrors';
import Contrato from '../../../typeorm/entities/Contrato';
import ContratoRepository from '../../../typeorm/repositories/ContratoRepository'



interface IRequestDTO {

  uuidcontrato: string;
  contrato:string;


  }

  class UpdateClientService {

    public async update({uuidcontrato,contrato}: IRequestDTO): Promise<Contrato | Error> {

      const Repository = getCustomRepository(ContratoRepository);

      const result = await Repository.findOne(uuidcontrato);

      if (!result) {
        throw new AppError ('client não existe',404);
      }


      result.contrato = contrato ? contrato : result.contrato;

  

      await Repository.save(result);

      return result;
    }
  }

  export default UpdateClientService;
