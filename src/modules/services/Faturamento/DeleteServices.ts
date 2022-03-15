import { getCustomRepository,getRepository } from 'typeorm'
import Faturamento from '../../../modules/typeorm/entities/Faturamento';
import FatRepository from '../../../modules/typeorm/repositories/FaturamentoRepository'


export default class DeleteService {

     async execute( cod_fat: string) {

      const usersRepository = getRepository(Faturamento);

      const service = await usersRepository.findOne(cod_fat);

      if (!service) {
        return new Error('Não Existe');
      }
      await usersRepository.delete(cod_fat);
      }
  }

