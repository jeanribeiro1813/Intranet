import { getCustomRepository } from 'typeorm'
import Cargo from '../../typeorm/entities/Cargo';
import CargoRepository from '../../typeorm/repositories/CargoRepository'
import AppError from '../../Error/AppError';

interface IRequestDTO {
    name:string;
    email:string;
    password:string;
  }
  
  class CreateCargoService {
  
    public async execute({ name, email, password}: IRequestDTO): Promise<Cargo> {
      
      const usersRepository = getCustomRepository(CargoRepository);
        
      const checkUserExists = await usersRepository.findOne(name);
  
      if (checkUserExists) {
        throw new AppError('Nome already used.');
      }
  
      const user = await usersRepository.create({
        name,
        email,
        password,
   
      });
  
      return user;
    }
  }
  
  export default CreateCargoService;
  