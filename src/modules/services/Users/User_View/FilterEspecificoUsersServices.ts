import { getCustomRepository, getRepository } from "typeorm";
import AppError from "../../../../shared/errors/AppErrors";
import Entitie from "../../../../shared/infra/typeorm/entities/Users";
import Repository from "../../../../shared/infra/typeorm/repositories/UsersRepository";


interface IRequestDTO {
  status:string;
  uuidusuario:string;
  h_status:string;
  uuidcargo:string;
  uuiddeparta:string
}


class FilterEspeServices{

  public async filterService ({status,uuidusuario,h_status,uuidcargo,uuiddeparta}: IRequestDTO): Promise< Entitie[] | Error> {

      const repository = getRepository(Entitie);

      const result = await repository.createQueryBuilder().select()
      .where('status ilike :status or uuidusuario :: text ilike :uuidusuario or h_status  ilike :h_status  or uuiddeparta :: text  ilike :uuiddeparta  or uuidcargo :: text  ilike :uuidcargo',
       {status:`%${status}%`,
       uuidusuario:`%${uuidusuario}%`,
       h_status:`%${h_status}%`,
       uuiddeparta:`%${uuiddeparta}%`,
       uuidcargo:`%${uuidcargo}%`}).getMany();

      if(!result){
        throw  new AppError ('Não Existe',405);
      }

      return result;
  }

}

export default FilterEspeServices;