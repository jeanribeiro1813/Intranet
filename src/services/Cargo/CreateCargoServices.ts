import { getCustomRepository } from 'typeorm'
import Cargo from '../../typeorm/entities/Cargo';
import CargoRepository from '../../typeorm/repositories/CargoRepository'


interface IRequestDTO {
    name:string;
    email:string;
    password:string;
  }
  
  class CreateCargoService {
  
    public async execute({ name, email, password}: IRequestDTO): Promise<Cargo | Error> {
      
      const usersRepository = getCustomRepository(CargoRepository);
        
      const checkUserExists = await usersRepository.findOne({name});
  
      if (checkUserExists) {
        return new Error('Nome already used.');
      }
  
      const user =  usersRepository.create({
        name,
        email,
        password,
   
      });

      await usersRepository.save(user);
  
      return user;
    }
  }
  
  export default CreateCargoService;
  