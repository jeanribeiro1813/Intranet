import { getCustomRepository } from 'typeorm'
import Cargo from '../../typeorm/entities/Cargo';
import CargoRepository from '../../typeorm/repositories/CargoRepository'
import AppErrors from '../../errors/AppErrors';


interface IRequestDTO {
    id:string;
    name:string;
    email:string;
    password:string;
  }
  
  class CreateCargoService {
  
    public async update({ id,name, email, password}: IRequestDTO): Promise<Cargo | Error> {
      
      const usersRepository = getCustomRepository(CargoRepository);
        
      const cargo = await usersRepository.findOne(id);
  
      if (!cargo) {
        throw new AppErrors('Cargo não existe');
      }

      cargo.name = name ? name : cargo.name;
      cargo.email = email ? email : cargo.email;
      cargo.password = password ? password : cargo.password;
   

      await usersRepository.save(cargo);
  
      return cargo;
    }
  }
  
  export default CreateCargoService;
  