import { getRepository } from 'typeorm';
import Dias from '../../../../shared/infra/typeorm/entities/Dias';
import DiasRepository from '../../../../shared/infra/typeorm/repositories/DiasRepository'
import AppError from '../../../../shared/errors/AppErrors';


interface IRequestDTO {

  incidence : string;



}

class LoadFilterServices{
  public async filter ({incidence}: IRequestDTO): Promise < Dias[] | AppError > {

      const Repository = getRepository(Dias);

      //Criando um Select personalizado como filtrando 2 colunas
      const result = await Repository.createQueryBuilder().select()
      .where(`(codigo:: text || '/' :: text || ano :: text ILIKE '%' || :incidence || '%') `, 
      {incidence: `%${incidence}%`}).getMany();


      console.log(`(codigo:: text || '/' :: text || ano :: text ILIKE '%' || :incidence || '%') `, 
      {incidence: `%${incidence}%`});

      if(!result){
        throw new AppError ('Não Existe',40);
      }
      
      return result;
}
  }


export default LoadFilterServices;
